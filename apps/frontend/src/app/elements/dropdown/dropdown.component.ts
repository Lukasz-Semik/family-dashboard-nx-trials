import { Component, ViewEncapsulation, Input } from '@angular/core';

import { FieldBase } from '../base/field.base';

interface Item<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent<T> extends FieldBase {
  @Input() items: Item<T>[] = [];
}
