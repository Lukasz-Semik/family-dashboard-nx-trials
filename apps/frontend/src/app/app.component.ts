import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-family-dashboard-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(translate: TranslateService, public authService: AuthService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.authService.verifyIsSignedIn();
  }
}
