import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-family-dashboard-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    translate: TranslateService,
    public authService: AuthService,
    private routerService: Router
  ) {
    translate.setDefaultLang('en');

    this.authService.isAuthenticatedEmitter.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.routerService.navigate(['/dashboard']);
      } else {
        this.routerService.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.authService.getIsSignedIn();
  }

  ngOnDestroy() {
    this.authService.isAuthenticatedEmitter.unsubscribe();
  }
}
