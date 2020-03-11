import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { requiredValidator } from '@app-fe/helpers/validators';
import { AuthService } from '@app-fe/auth/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  public signInForm: FormGroup;
  public isSubmitted = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', requiredValidator()),
      password: new FormControl('', requiredValidator()),
    });
  }

  public async onSubmit() {
    this.isSubmitted = true;

    try {
      await this.authService.signIn({
        // as local strategy is used (pssport), we pass email as username
        username: this.signInForm.get('email').value as string,
        password: this.signInForm.get('password').value as string,
      });
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }
  }
}
