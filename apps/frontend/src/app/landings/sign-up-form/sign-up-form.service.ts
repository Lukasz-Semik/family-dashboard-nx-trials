import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

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

  public back() {
    this.step = Step.PresonalDetails;
  }

  public get personalDetailsStep() {
    return Step.PresonalDetails;
  }

  public onSubmit(personalDetailsForm: AbstractControl, accountDetailsForm: AbstractControl) {
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

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
}
