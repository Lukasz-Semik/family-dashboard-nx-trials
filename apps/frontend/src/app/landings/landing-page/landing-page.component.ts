import { Component } from '@angular/core';
import { AuthService } from '@app-fe/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  constructor(public authService: AuthService, private routerService: Router) {}
}
