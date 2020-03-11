import { Injectable } from '@angular/core';
import { UserData } from '@family-dashboard/app-types';

import { AuthService } from '@app-fe/auth/auth.service';
import { UserApiService } from '@app-fe/api/user';


@Injectable()
export class UserService {
  public user: UserData;
  public isLoading = false;

  constructor(private authService: AuthService, private userApiService: UserApiService) {
    this.setUser();
  }

  private async setUser() {
    try {
      if (this.authService.user) {
        this.user = this.authService.user;
      } else {
        this.isLoading = true;
        const response = await this.userApiService.me();
  
        this.user = response?.data?.user;
      }
    } catch(err) {
      console.log(err)
    }

    this.isLoading = false;
  }
}
