import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    SignUpPageComponent,
    LandingPageComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [TranslateModule, ReactiveFormsModule, ElementsModule, RouterModule],
  exports: [LandingPageComponent, SignUpPageComponent],
})
export class LandingsModule {}
