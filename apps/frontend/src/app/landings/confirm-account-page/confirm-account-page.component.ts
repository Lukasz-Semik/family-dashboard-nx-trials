import { Component, OnInit } from '@angular/core';
import { UserApiService } from '@app-fe/api/user';
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
    private userApiService: UserApiService,
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
      await this.userApiService.confirm({ token: this.token });
      this.routerService.navigate(['/']);
    } catch (err) {
      // TODO: add notifications
      console.log(err);
    }
  }
}
