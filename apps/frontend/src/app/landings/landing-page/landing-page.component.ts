import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-fe/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  constructor(public authService: AuthService, private routerService: Router) {}

  ngOnInit() {
    this.verifySignedIn();
  }

  private async verifySignedIn() {
    const isSignedIn = await this.authService.getIsSignedIn();

    if (isSignedIn) {
      this.routerService.navigate(['/dashboard']);
    }
  }
}
