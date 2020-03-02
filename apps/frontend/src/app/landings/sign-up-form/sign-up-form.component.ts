import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { requiredValidator } from '@app-fe/helpers/validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  public signUpForm: FormGroup;
  public isSubmitted = false;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', requiredValidator()),
      lastName: new FormControl('', requiredValidator()),
    });
    this.signUpForm.valueChanges.subscribe(() => console.log('test'));
  }

  onValueChange() {
    if (this.isSubmitted) {
      this.isSubmitted = false;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
