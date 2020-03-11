import { Component } from '@angular/core';

import { UserService } from '../store/user.service';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
})
export class UserDashboardPage {
  constructor(private userService: UserService) {}

  public get user() {
    return this.userService.user;
  }

  public get isLoading() {
    return this.userService.isLoading;
  }
}
