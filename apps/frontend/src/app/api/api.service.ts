import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserApi } from './user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public user = new UserApi(this.http);
}
