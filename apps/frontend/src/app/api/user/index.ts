import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserSignUpPostOptions,
  UserConfirmPatchOptions,
  UserSignInPostOptions,
  UserData,
  AppResponse,
} from '@family-dashboard/app-types';
import { userRoutes } from '@family-dashboard/app-api-routes';

import { AccessTokenService } from '@app-fe/auth/access-token.service';

import { ApiBase } from '../api-base';

@Injectable({ providedIn: 'root' })
export class UserApiService extends ApiBase {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) {
    super();
    this.accessTokenService.tokenEmitter.subscribe(token => (this.accessToken = token));
  }

  public signUp(values: UserSignUpPostOptions) {
    return this.http.post(this.getApiPath(userRoutes.signUp.fullPath), values).toPromise();
  }

  public confirm(values: UserConfirmPatchOptions) {
    return this.http.patch(this.getApiPath(userRoutes.confirm.fullPath), values).toPromise();
  }

  public signIn(values: UserSignInPostOptions): Promise<{ accessToken?: string }> {
    return this.http.post(this.getApiPath(userRoutes.signIn.fullPath), values).toPromise();
  }

  public me(): Promise<AppResponse<{ user: UserData }>> {
    return this.http
      .get(this.getApiPath(userRoutes.me.fullPath), {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
      .toPromise() as Promise<AppResponse<{ user: UserData }>>;
  }
}
