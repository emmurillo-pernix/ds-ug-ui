import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Credentials, AuthResponse } from './../../models/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) { }

  authenticate(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post('/authenticate', credentials, false);
  }
}
