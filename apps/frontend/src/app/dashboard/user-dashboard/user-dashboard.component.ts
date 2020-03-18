import { Component } from '@angular/core';

import { UserService } from '@app-fe/store/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  constructor(private userService: UserService) {}

  public get user() {
    console.log(this.userService.user);
    return this.userService.user;
  }
}
