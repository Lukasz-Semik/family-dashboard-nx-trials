import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '@app-fe/landings/landing-page/landing-page.component';
import { SignUpPageComponent } from '@app-fe/landings/sign-up-page/sign-up-page.component';
import { ConfirmAccountPageComponent } from '@app-fe/landings/confirm-account-page/confirm-account-page.component';
import { UserDashboardPage } from '@app-fe/dashboard/user-dashboard-page/user-dashboard-page.component';
import { AuthGuard } from '@app-fe/auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'confirm-account',
    component: ConfirmAccountPageComponent,
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: UserDashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
