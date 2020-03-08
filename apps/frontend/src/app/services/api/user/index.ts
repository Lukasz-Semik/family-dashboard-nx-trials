import { HttpClient } from '@angular/common/http';
import {
  UserSignUpPostOptions,
  UserConfirmPatchOptions,
  UserSignInPostOptions,
  UserData,
} from '@family-dashboard/app-types';
import { userRoutes } from '@family-dashboard/app-api-routes';
import { ApiBase } from '../api-base';
import { AccessTokenService } from '@app-fe/services/access-token/access-token.service';
import { Injectable } from '@angular/core';

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
