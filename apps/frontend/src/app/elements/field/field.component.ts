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
    const hasErrror = !this.field.valid && (this.field.touched || this.isFormSubmitted);

    return hasErrror ? this.field.errors['message'] : '';
  }
}
