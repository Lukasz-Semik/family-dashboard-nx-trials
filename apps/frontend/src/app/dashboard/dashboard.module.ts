import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '@app-fe/elements/elements.module';
import { UserDashboardPage } from './user-dashboard-page/user-dashboard-page.component';

@NgModule({
  declarations: [UserDashboardPage],
  imports: [TranslateModule, ReactiveFormsModule, ElementsModule, RouterModule, CommonModule],
  exports: [UserDashboardPage],
})
export class DashboardModule {}
