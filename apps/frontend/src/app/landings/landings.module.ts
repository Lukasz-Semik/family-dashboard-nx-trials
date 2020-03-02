import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInFormomponent } from './sign-in-form/sign-in-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingPageComponent, SignUpPageComponent, SignInFormomponent],
  imports: [TranslateModule, ReactiveFormsModule, ElementsModule, RouterModule],
  exports: [LandingPageComponent, SignUpPageComponent],
})
export class LandingsModule {}
