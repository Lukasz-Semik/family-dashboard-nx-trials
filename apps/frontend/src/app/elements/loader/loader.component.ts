import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size: string | undefined;
  @Input() isFullScreen: boolean | undefined;
  @Input() text: string | undefined;

  constructor(private loaderService: NgxSpinnerService) {}

  ngOnInit() {
    this.loaderService.show();
  }
}
