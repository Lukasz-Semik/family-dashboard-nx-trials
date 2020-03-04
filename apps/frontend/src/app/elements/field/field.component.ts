import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() name: string;
  @Input() labelText: string;
  @Input() isFormSubmitted: boolean;
  @Input() field: AbstractControl;
  @Input() isFocused: boolean;

  private get hasError() {
    return !this.field.valid && (this.field.touched || this.isFormSubmitted);
  }

  public get labelClassNames() {
    return {
      label: true,
      'is-focused': this.isFocused,
    };
  }

  public get indicatorClassNames() {
    return {
      separator: true,
      'separator-indicator': true,
      'is-focused': this.isFocused,
    };
  }

  public get errorMsg() {
    return this.hasError ? this.field.errors['message'] : '';
  }

  public get errorMsgValue() {
    return this.hasError ? this.field.errors['value'] : '';
  }
}
