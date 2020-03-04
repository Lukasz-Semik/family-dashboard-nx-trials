import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Gender } from '@family-dashboard/app-constants';
import { Router } from '@angular/router';

import { ApiService } from '@app-fe/api/api.service';

enum Step {
  PresonalDetails = 'personal',
  AccountDetails = 'account',
}

@Injectable()
export class SignUpFormService {
  public step = Step.PresonalDetails;
  public isPersonalDetailsFormSubmitted = false;
  public isAccountDetailsFormSubmitted = false;
  public showPasswordsError = false;
  public isLoading = false;

  constructor(private apiService: ApiService, private routerService: Router) {}

  public back() {
    this.step = Step.PresonalDetails;
  }

  public get personalDetailsStep() {
    return Step.PresonalDetails;
  }

  public async onSubmit(personalDetailsForm: AbstractControl, accountDetailsForm: AbstractControl) {
    this.isPersonalDetailsFormSubmitted = true;

    if (this.step === Step.PresonalDetails && personalDetailsForm.valid) {
      this.step = Step.AccountDetails;
    } else if (accountDetailsForm.valid && personalDetailsForm.valid) {
      this.isAccountDetailsFormSubmitted = true;

      const arePasswordsValid =
        accountDetailsForm.get('password').value ===
        accountDetailsForm.get('passwordConfirm').value;

      if (!arePasswordsValid) {
        this.showPasswordsError = true;
        return;
      }

      this.isLoading = true;

      try {
        await this.apiService.user.signUp({
          password: accountDetailsForm.get('password').value as string,
          email: accountDetailsForm.get('email').value as string,
          firstName: personalDetailsForm.get('firstName').value as string,
          lastName: personalDetailsForm.get('lastName').value as string,
          gender: personalDetailsForm.get('gender').value as Gender,
          birthDate: personalDetailsForm.get('birthDate').value as string,
        });

        this.isLoading = false;

        this.routerService.navigate(['/']);
      } catch (err) {
        // TODO: add notifications
        console.log(err);
      }
    }
  }
}
