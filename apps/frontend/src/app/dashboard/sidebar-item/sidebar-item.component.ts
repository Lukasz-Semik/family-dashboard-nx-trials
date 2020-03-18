import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() src: string | undefined;
  @Input() text: string;
  @Input() isActive: boolean;

  public get classNames() {
    return {
      item: true,
      'is-active': this.isActive,
    };
  }
}
