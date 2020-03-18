import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { FamilyPageComponent } from './family-page/family-page.component';

@NgModule({
  declarations: [FamilyPageComponent],
  imports: [ElementsModule, TranslateModule, ReactiveFormsModule, RouterModule, CommonModule],
  exports: [FamilyPageComponent],
})
export class FamilyModule {}
