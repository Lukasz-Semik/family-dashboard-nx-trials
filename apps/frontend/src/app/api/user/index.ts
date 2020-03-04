import { HttpClient } from '@angular/common/http';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';
import { userRoutes } from '@family-dashboard/app-api-routes';
import { ApiBase } from '../apiBase';

export class UserApi extends ApiBase {
  constructor(private http: HttpClient) {
    super();
  }

  public signUp(values: UserSignUpPostOptions) {
    return this.http.post(this.getApiPath(userRoutes.signUp.fullPath), values).toPromise();
  }
}
