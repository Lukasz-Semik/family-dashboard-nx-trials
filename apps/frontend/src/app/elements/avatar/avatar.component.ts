import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() userName: string | undefined;
  @Input() value: string | undefined;
  @Input() size: number | undefined;
  @Input() hasTooltip: boolean | undefined;
  @Input() isTextHidden: boolean | undefined;
}
