import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { getLocalStorageValue } from '@app-fe/helpers/localStorage';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  public tokenEmitter = new Subject<string>();
}
