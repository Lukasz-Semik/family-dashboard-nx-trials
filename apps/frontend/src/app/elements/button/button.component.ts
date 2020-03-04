import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() type: string | undefined;
  @Input() isDisabled: boolean | undefined;
  @Input() isLoading: boolean | undefined;

  public get buttonType() {
    return this.type || 'submit';
  }
}
