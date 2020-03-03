import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class FieldBase {
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() type: string;
  @Input() labelText: string;
  @Input() placeholderText: string | undefined;
  @Input() isFormSubmitted: boolean;

  public isHovered = false;
  public isFocused = false;

  public get placeholder() {
    return this.placeholderText || '';
  }

  public get field() {
    return this.form.get(this.name);
  }
}
