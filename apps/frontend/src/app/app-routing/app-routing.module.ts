import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '@app-fe/pages/landing-page/landing-page.component';
import { SignUpPageComponent } from '@app-fe/pages/sign-up-page/sign-up-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
