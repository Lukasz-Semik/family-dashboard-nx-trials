import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() type: string;
  @Input() labelText: string;
  @Input() placeholderText: string | undefined;
  @Input() isFormSubmitted: boolean;

  public isHovered = false;
  public isFocused = false;

  public get inputType() {
    return this.type || 'text';
  }

  public get placeholder() {
    return this.placeholderText || '';
  }

  private get field() {
    return this.form.get(this.name);
  }

  check() {
    console.log(this.form.get(this.name).errors);
  }

  public get labelClassNames() {
    return {
      label: true,
      'is-focused': this.isFocused || this.isHovered,
    };
  }

  public get indicatorClassNames() {
    return {
      separator: true,
      'separator-indicator': true,
      'is-focused': this.isFocused || this.isHovered,
    };
  }

  public get errorMsg() {
    const hasErrror = !this.field.valid && (this.field.touched || this.isFormSubmitted);

    return hasErrror ? this.field.errors['message'] : '';
  }
}
