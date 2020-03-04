import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import {
  requiredValidator,
  composeValidators,
  emailValidator,
  passwordValidators,
  pastValidator,
} from '@app-fe/helpers/validators';
import { DropdownComponent } from '@app-fe/elements/dropdown/dropdown.component';
import { genders as gendersRaw } from '@app-fe/constants/fields';

import { SignUpFormService } from './sign-up-form.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [SignUpFormService],
})
export class SignUpFormComponent implements OnInit {
  @ViewChild('genderDropdown') genderDropdown: DropdownComponent<string>;

  public signUpForm: FormGroup;
  public genders = gendersRaw;

  constructor(private translate: TranslateService, public signUpService: SignUpFormService) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      personalDetails: new FormGroup({
        firstName: new FormControl('', requiredValidator()),
        lastName: new FormControl('', requiredValidator()),
        birthDate: new FormControl('', composeValidators(requiredValidator(), pastValidator())),
        gender: new FormControl('', requiredValidator()),
      }),
      accountDetails: new FormGroup({
        email: new FormControl('', composeValidators(requiredValidator(), emailValidator())),
        password: new FormControl(
          '',
          composeValidators(requiredValidator(), ...passwordValidators)
        ),
        passwordConfirm: new FormControl(
          '',
          composeValidators(requiredValidator(), ...passwordValidators)
        ),
      }),
    });

    this.accountDetailsForm
      .get('passwordConfirm')
      .valueChanges.subscribe(() => (this.signUpService.showPasswordsError = false));
    this.accountDetailsForm
      .get('password')
      .valueChanges.subscribe(() => (this.signUpService.showPasswordsError = false));

    this.setGenders();
  }

  private setGenders() {
    gendersRaw.forEach((gender, i) => {
      this.translate.get(gender.label).subscribe(res => {
        this.genders[i].label = res;
      });
    });
  }

  public onSubmit() {
    this.signUpService.onSubmit(this.personalDetailsForm, this.accountDetailsForm);
  }

  public get personalDetailsForm() {
    return this.signUpForm.get('personalDetails');
  }

  public get accountDetailsForm() {
    return this.signUpForm.get('accountDetails');
  }
}
