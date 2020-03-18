import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '@app-fe/landings/landing-page/landing-page.component';
import { SignUpPageComponent } from '@app-fe/landings/sign-up-page/sign-up-page.component';
import { ConfirmAccountPageComponent } from '@app-fe/landings/confirm-account-page/confirm-account-page.component';
import { UserDashboardPageComponent } from '@app-fe/dashboard/user-dashboard-page/user-dashboard-page.component';
import { ShoppingListsPageComponent } from '@app-fe/shopping-list/shopping-lists-page/shopping-lists-page.component';
import { UserDashboardComponent } from '@app-fe/dashboard/user-dashboard/user-dashboard.component';
import { FamilyPageComponent } from '@app-fe/family/family-page/family-page.component';
import { AccountSettingsPageComponent } from '@app-fe/dashboard/account-settings-page/account-settings-page.component';

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
    component: UserDashboardPageComponent,
    children: [
      {
        path: '',
        component: UserDashboardComponent,
      },
      {
        path: 'family',
        component: FamilyPageComponent,
      },
      {
        path: 'shopping-lists',
        component: ShoppingListsPageComponent,
      },
      {
        path: 'account-settings',
        component: AccountSettingsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
