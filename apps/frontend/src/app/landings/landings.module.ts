import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { ConfirmAccountPageComponent } from './confirm-account-page/confirm-account-page.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    SignUpPageComponent,
    LandingPageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ConfirmAccountPageComponent,
  ],
  imports: [TranslateModule, ReactiveFormsModule, ElementsModule, RouterModule, CommonModule],
  exports: [LandingPageComponent, SignUpPageComponent, ConfirmAccountPageComponent],
})
export class LandingsModule {}
