import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-fe/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.scss'],
})
export class UserDashboardPage implements OnInit {
  constructor(private authService: AuthService, private routerService: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated) {
      this.routerService.navigate(['/']);
    }
  }
}
