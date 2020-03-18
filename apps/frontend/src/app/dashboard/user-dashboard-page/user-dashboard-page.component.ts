import { Component } from '@angular/core';

import { UserService } from '@app-fe/store/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
})
export class UserDashboardPageComponent {
  constructor(private userService: UserService, public routerService: Router) {}

  public get user() {
    return this.userService.user;
  }

  public get isLoading() {
    return this.userService.isLoading;
  }
}
