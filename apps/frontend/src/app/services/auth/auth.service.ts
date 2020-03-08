import { Injectable } from '@angular/core';
import { UserSignInPostOptions } from '@family-dashboard/app-types';

import { getLocalStorageValue, setLocalStorageValue } from '@app-fe/helpers/localStorage';
import { UserApiService } from '../api/user'

import { AccessTokenService } from '../access-token/access-token.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken: string;
  public isLoading = false;

  constructor(
    private accessTokenService: AccessTokenService,
    private userApiService: UserApiService,
    private routerService: Router
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

        this.routerService.navigate(['/dashboard']);
      }
    } catch (err) {
      console.log(err);
    }

    this.isLoading = false;
  }

  public async getIsSignedIn() {
    if (!this.accessToken) {
      return false;
    }

    this.isLoading = true;

    try {
      const response = await this.userApiService.me();
      
      if (response?.data?.user) {
        this.isLoading = false;

        return true;
      }
    } catch(err) {
      console.log(err)
    }

    this.isLoading = false;
    return false
  }
}
