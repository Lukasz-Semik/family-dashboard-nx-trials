import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { UserService } from '@app-fe/store/user.service';
import { requiredValidator } from '@app-fe/helpers/validators';
import { FamilyApiService } from '@app-fe/api/family';

@Component({
  selector: 'app-family-creator',
  templateUrl: './family-creator.component.html',
  styleUrls: ['./family-creator.component.scss'],
})
export class FamilyCreatorComponent implements OnInit {
  public newFamilyForm: FormGroup;
  public isSubmitted = false;
  public isLoading = false;

  constructor(private userService: UserService, private familyApiService: FamilyApiService) {}

  ngOnInit() {
    this.newFamilyForm = new FormGroup({
      name: new FormControl(this.userService.user?.lastName, requiredValidator()),
    });
  }

  public async onSubmit() {
    this.isLoading = true;

    try {
      await this.familyApiService.create({ name: this.newFamilyForm.get('name').value });
      await this.userService.setUser(true);
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }

    this.isLoading = false;
  }
}
