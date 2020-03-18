import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '@app-fe/elements/elements.module';

import { ShoppingListsPageComponent } from './shopping-lists-page/shopping-lists-page.component';

@NgModule({
  declarations: [ShoppingListsPageComponent],
  imports: [ElementsModule, TranslateModule, ReactiveFormsModule, RouterModule, CommonModule],
  exports: [ShoppingListsPageComponent],
})
export class ShoppingListMdoule {}
