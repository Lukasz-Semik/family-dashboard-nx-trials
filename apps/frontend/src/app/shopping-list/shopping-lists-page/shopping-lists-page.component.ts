import { Component } from '@angular/core';

import { UserService } from '@app-fe/store/user.service';

@Component({
  selector: 'app-shopping-lists-page',
  templateUrl: './shopping-lists-page.component.html',
  styleUrls: ['./shopping-lists-page.component.scss'],
})
export class ShoppingListsPageComponent {
  constructor(private userService: UserService) {}

  public get user() {
    return this.userService.user;
  }
}
