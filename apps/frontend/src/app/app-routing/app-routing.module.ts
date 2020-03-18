import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '@app-fe/landings/landing-page/landing-page.component';
import { SignUpPageComponent } from '@app-fe/landings/sign-up-page/sign-up-page.component';
import { ConfirmAccountPageComponent } from '@app-fe/landings/confirm-account-page/confirm-account-page.component';
import { UserDashboardPage } from '@app-fe/dashboard/user-dashboard-page/user-dashboard-page.component';
import { ShoppingListsPageComponent } from '@app-fe/shopping-list/shopping-lists-page/shopping-lists-page.component';

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
    component: UserDashboardPage,
    children: [
      {
        path: 'shopping-lists',
        component: ShoppingListsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
