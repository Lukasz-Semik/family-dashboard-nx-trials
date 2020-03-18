import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { UserDashboardPage } from './user-dashboard-page/user-dashboard-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { FamilyCreatorComponent } from './family-creator/family-creator.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    UserDashboardPage,
    UserDashboardComponent,
    SidebarComponent,
    SidebarItemComponent,
    FamilyCreatorComponent,
  ],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    ElementsModule,
    RouterModule,
    CommonModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [UserDashboardPage],
})
export class DashboardModule {}
