import { Injectable } from '@angular/core';
import { UserData } from '@family-dashboard/app-types';

import { AuthService } from '@app-fe/auth/auth.service';
import { UserApiService } from '@app-fe/api/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: UserData;
  public isLoading = false;

  constructor(private authService: AuthService, private userApiService: UserApiService) {
    this.setUser();
  }

  public async setUser(refreshUser?: boolean) {
    try {
      if (this.authService.user && !refreshUser) {
        this.user = this.authService.user;
      } else {
        this.isLoading = true;
        const response = await this.userApiService.me();
  
        this.user = response?.data?.user;
      }
    } catch(err) {
      // TODO: add notifications
      console.log(err)
    }

    this.isLoading = false;
  }
}
