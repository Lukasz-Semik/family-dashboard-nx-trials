import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [LandingPageComponent, SignUpPageComponent],
  exports: [LandingPageComponent, SignUpPageComponent],
})
export class PagesModule {}
