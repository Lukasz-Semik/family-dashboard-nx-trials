import { Component } from '@angular/core';

import { setLocalStorageValue, APP_TOKEN_KEY } from '@app-fe/helpers/localStorage';
import { Router } from '@angular/router';
import { UserService } from '../../store/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public routerService: Router, private userService: UserService) {}

  public onSignOut() {
    setLocalStorageValue(APP_TOKEN_KEY, '');
    this.routerService.navigate(['/']);
  }

  public get userName() {
    return this.userService.user?.fullName;
  }
}
