import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '@app-fe/landings/landing-page/landing-page.component';
import { SignUpPageComponent } from '@app-fe/landings/sign-up-page/sign-up-page.component';

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