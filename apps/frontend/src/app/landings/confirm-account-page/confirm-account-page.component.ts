import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app-fe/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-account-page',
  templateUrl: './confirm-account-page.component.html',
  styleUrls: ['./confirm-account-page.component.scss'],
})
export class ConfirmAccountPageComponent implements OnInit {
  public isLoading = false;
  private token: string;

  constructor(
    private apiService: ApiService,
    private routerService: Router,
    private routeService: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeService.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  public async onClick() {
    try {
      await this.apiService.user.confirm({ token: this.token });
      this.routerService.navigate(['/']);
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }
  }
}
