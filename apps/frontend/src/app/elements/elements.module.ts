import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, TranslateModule],
  exports: [InputComponent, ButtonComponent],
})
export class ElementsModule {}
