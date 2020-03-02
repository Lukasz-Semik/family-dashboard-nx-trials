import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { requiredValidator } from '@app-fe/helpers/validators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormomponent implements OnInit {
  public signInForm: FormGroup;
  public isSubmitted = false;

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', requiredValidator()),
      password: new FormControl('', requiredValidator()),
    });
    this.signInForm.valueChanges.subscribe(() => console.log('test'));
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
