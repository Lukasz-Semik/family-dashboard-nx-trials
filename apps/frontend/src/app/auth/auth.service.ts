import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserSignInPostOptions } from '@family-dashboard/app-types';

import { getLocalStorageValue, setLocalStorageValue } from '@app-fe/helpers/localStorage';
import { UserApiService } from '@app-fe/api/user'
import { UserData } from '@family-dashboard/app-types';

import { AccessTokenService } from './access-token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string;
  public isLoading = false;
  public isAuthenticatedEmitter = new Subject<boolean>();
  public user: UserData;

  constructor(
    private accessTokenService: AccessTokenService,
    private userApiService: UserApiService,
    private routerService: Router,
  ) {
    const token = getLocalStorageValue('family_dashboard_token');
    accessTokenService.tokenEmitter.subscribe(tokenValue => (this.accessToken = tokenValue));
    this.accessTokenService.tokenEmitter.next(token);
  }

  public async signIn(values: UserSignInPostOptions): Promise<void> {
    this.isLoading = true;

    try {
      const response = await this.userApiService.signIn(values);

      if (response.accessToken) {
        setLocalStorageValue('family_dashboard_token', response.accessToken);
        this.accessTokenService.tokenEmitter.next(response.accessToken);
        this.isAuthenticatedEmitter.next(true);

        this.routerService.navigate(['/dashboard']);
      }
    } catch (err) {
      console.log(err);
    }

    this.isLoading = false;
  }

  public async getIsSignedIn() {
    if (!this.accessToken) {
      return null;
    }

    this.isLoading = true;

    try {
      const response = await this.userApiService.me();
      const user = response?.data?.user;
      
      if (user) {
        this.user = user;
        this.isLoading = false;
        this.isAuthenticatedEmitter.next(true);

        return user;
      }
    } catch(err) {
      console.log(err)
    }

    this.isAuthenticatedEmitter.next(false);
    this.isLoading = false;
    return null;
  }
}
