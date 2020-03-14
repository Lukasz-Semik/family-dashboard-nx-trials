import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrls: ['./button-main.component.scss'],
})
export class ButtonMainComponent {
  @Input() text: string;
  @Input() type: string | undefined;
  @Input() isDisabled: boolean | undefined;
  @Input() isLoading: boolean | undefined;

  public get buttonType() {
    return this.type || 'submit';
  }
}
