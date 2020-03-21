import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@app-fe/store/user.service';
import { FamilyService } from '@app-fe/store/family.service';

@Component({
  selector: 'app-family-panel',
  templateUrl: './family-panel.component.html',
  styleUrls: ['./family-panel.component.scss'],
})
export class FamilyPanelComponent implements OnInit {
  constructor(private userService: UserService, private familyService: FamilyService) {}

  public get user() {
    return this.userService.user;
  }

  public get family() {
    return this.familyService.family;
  }

  public get avatars() {
    return this.familyService.family?.users.map(user => ({
      userName: user.fullName,
    }))
  }

  ngOnInit() {
    if (this.user.familyId) {
      this.familyService.setFamily(this.user.familyId);
    }
  }
}
