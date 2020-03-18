import { Injectable } from '@angular/core';

import { getLocalStorageValue, setLocalStorageValue } from '@app-fe/helpers/localStorage';
import { APP_TOKEN_KEY } from '@app-fe/helpers/localStorage';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  private token: string;

  constructor() {
    this.token = getLocalStorageValue(APP_TOKEN_KEY);
  }

  public get() {
    return this.token;
  }

  public set(token: string) {
    setLocalStorageValue(APP_TOKEN_KEY, token);
    this.token = token;
  }
}
