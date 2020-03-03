import { Component } from '@angular/core';

import { FieldBase } from '../base/field.base';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FieldBase {
  public get inputType() {
    return this.type || 'text';
  }
}
