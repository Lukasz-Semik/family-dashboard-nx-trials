import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccessTokenService } from '@app-fe/auth/access-token.service';
import { FamilyCreatePostOptions } from '@family-dashboard/app-types';
import { familyRoutes } from '@family-dashboard/app-api-routes';

import { getApiPath } from '../base';

@Injectable({ providedIn: 'root' })
export class FamilyApiService {
  constructor(private http: HttpClient, private accessTokenService: AccessTokenService) {}

  public create(values: FamilyCreatePostOptions) {
    return this.http
      .post(getApiPath(familyRoutes.fullPath), values, {
        headers: {
          Authorization: `Bearer ${this.accessTokenService.get()}`,
        },
      })
      .toPromise();
  }
}
