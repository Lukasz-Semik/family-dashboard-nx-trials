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

import { getApiPath } from '../base';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) {}

  public signUp(values: UserSignUpPostOptions) {
    return this.http.post(getApiPath(userRoutes.signUp.fullPath), values).toPromise();
  }

  public confirm(values: UserConfirmPatchOptions) {
    return this.http.patch(getApiPath(userRoutes.confirm.fullPath), values).toPromise();
  }

  public signIn(values: UserSignInPostOptions): Promise<{ accessToken?: string }> {
    return this.http.post(getApiPath(userRoutes.signIn.fullPath), values).toPromise();
  }

  public me(): Promise<AppResponse<{ user: UserData }>> {
    return this.http
      .get(getApiPath(userRoutes.me.fullPath), {
        headers: {
          Authorization: `Bearer ${this.accessTokenService.get()}`,
        },
      })
      .toPromise() as Promise<AppResponse<{ user: UserData }>>;
  }
}
