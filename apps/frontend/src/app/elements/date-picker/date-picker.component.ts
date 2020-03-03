import { Component, ViewEncapsulation } from '@angular/core';

import { FieldBase } from '../base/field.base';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerComponent extends FieldBase {}
