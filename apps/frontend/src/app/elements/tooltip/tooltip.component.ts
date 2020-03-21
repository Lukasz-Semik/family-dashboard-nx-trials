import { Component, Input, ViewEncapsulation } from '@angular/core';

export enum TooltipPosition {
  Left = 'left',
  Right = 'right',
  Above = 'above',
  Below = 'below',
  After = 'after',
  Before = 'before',
}

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent {
  @Input() text: string;
  @Input() isDisabled: boolean;
  @Input() position: TooltipPosition = TooltipPosition.Below;
}
