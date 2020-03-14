import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignInPostOptions } from '@family-dashboard/app-types';
import { UserData } from '@family-dashboard/app-types';

import { getLocalStorageValue, setLocalStorageValue } from '@app-fe/helpers/localStorage';
import { UserApiService } from '@app-fe/api/user'
import { APP_TOKEN_KEY } from '@app-fe/helpers/localStorage';

import { AccessTokenService } from './access-token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string;
  public isLoading = false;
  public user: UserData;

  constructor(
    private accessTokenService: AccessTokenService,
    private userApiService: UserApiService,
    private routerService: Router,
  ) {
    const token = getLocalStorageValue(APP_TOKEN_KEY);
    accessTokenService.tokenEmitter.subscribe(tokenValue => (this.accessToken = tokenValue));
    this.accessTokenService.tokenEmitter.next(token);
  }

  public async signIn(values: UserSignInPostOptions): Promise<void> {
    this.isLoading = true;

    try {
      const response = await this.userApiService.signIn(values);

      if (response.accessToken) {
        setLocalStorageValue(APP_TOKEN_KEY, response.accessToken);
        this.accessTokenService.tokenEmitter.next(response.accessToken);

        this.routerService.navigate(['/dashboard']);
      }
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }

    this.isLoading = false;
  }

  public async verifyIsSignedIn() {
    if (!this.accessToken) {
      this.routerService.navigate(['/']);
      return;
    }

    this.isLoading = true;

    try {
      const response = await this.userApiService.me();
      const user = response?.data?.user;
      console.log(user);
      if (user) {
        this.user = user;
        this.routerService.navigate(['/dashboard']);
        this.isLoading = false;

        return;
      }
    } catch(err) {
      // TODO: add notifications
      console.log(err)
    }

    this.routerService.navigate(['/']);
    this.isLoading = false;
    return;
  }
}
