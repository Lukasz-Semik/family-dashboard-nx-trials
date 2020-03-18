import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignInPostOptions } from '@family-dashboard/app-types';
import { UserData } from '@family-dashboard/app-types';

import { UserApiService } from '@app-fe/api/user'

import { AccessTokenService } from './access-token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isLoading = false;
  public user: UserData;

  constructor(
    private accessTokenService: AccessTokenService,
    private userApiService: UserApiService,
    private routerService: Router,
  ) {}

  public async signIn(values: UserSignInPostOptions): Promise<void> {
    this.isLoading = true;

    try {
      const response = await this.userApiService.signIn(values);

      if (response.accessToken) {
        this.accessTokenService.set(response.accessToken);

        this.routerService.navigate(['/dashboard']);
      }
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }

    this.isLoading = false;
  }

  public async verifyIsSignedIn() {
    if (!this.accessTokenService.get()) {
      this.routerService.navigate(['/']);
      return;
    }

    this.isLoading = true;

    try {
      const response = await this.userApiService.me();
      const user = response?.data?.user;

      if (user) {
        this.user = user;
        this.isLoading = false;

        if (!this.routerService.url.includes('/dashboard')) {
          this.routerService.navigate(['/dashboard']);
        }

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
