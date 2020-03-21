import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import {
  MatMomentDateModule,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FieldComponent } from './field/field.component';
import { InputComponent } from './input/input.component';
import { ButtonMainComponent } from './button-main/button-main.component';
import { LogoComponent } from './logo/logo.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderFullScreenComponent } from './loader-full-screen/loader-full-screen.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LayoutComponent } from './layout/layout.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    FieldComponent,
    InputComponent,
    ButtonMainComponent,
    LogoComponent,
    DatePickerComponent,
    DropdownComponent,
    ErrorMsgComponent,
    LoaderComponent,
    LoaderFullScreenComponent,
    AvatarComponent,
    LayoutComponent,
    TooltipComponent,
    AvatarsGroupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    NgxSpinnerModule,
    AvatarModule,
    RouterModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  exports: [
    InputComponent,
    ButtonMainComponent,
    LogoComponent,
    DatePickerComponent,
    DropdownComponent,
    ErrorMsgComponent,
    LoaderComponent,
    LoaderFullScreenComponent,
    AvatarComponent,
    LayoutComponent,
    TooltipComponent,
    AvatarsGroupComponent,
  ],
})
export class ElementsModule {}
