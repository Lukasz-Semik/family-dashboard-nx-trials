import { Component, Input } from '@angular/core';

interface Avatar {
  userName: string;
  url?: string;
}

@Component({
  selector: 'app-avatars-group',
  templateUrl: './avatars-group.component.html',
  styleUrls: ['./avatars-group.component.scss'],
})
export class AvatarsGroupComponent {
  @Input() avatars: Avatar[];

  public get counterValue() {
    return this.avatars.length - 3;
  }

  public get avatarsToDisplay() {
    return this.avatars.slice(0, 3);
  }
}
