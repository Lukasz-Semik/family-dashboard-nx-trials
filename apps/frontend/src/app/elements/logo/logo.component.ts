import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() isSmall: boolean | undefined;
  @Input() isStatic: boolean | undefined;
  @Input() path: string | undefined;

  public get logoPath() {
    return this.path || '/';
  }

  public get classNames() {
    return {
      logo: true,
      'is-small': this.isSmall,
      'is-static': this.isStatic,
    };
  }
}
