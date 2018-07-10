import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthResponse } from './../../models/auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthStore {

  public static readonly AUTH_TOKEN_KEY = 'DSUG_AUTH_TOKEN';
  private auth: BehaviorSubject<AuthResponse> = new BehaviorSubject(null);

  constructor(private jwtHelper: JwtHelperService) {
    if (this.isAuthenticated()) {
      const auth: AuthResponse = { auth_token: localStorage.getItem(AuthStore.AUTH_TOKEN_KEY) }
      this.setAuth(auth);
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(AuthStore.AUTH_TOKEN_KEY);
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  setAuth(authResponse: AuthResponse) {
    localStorage.setItem(AuthStore.AUTH_TOKEN_KEY, authResponse.auth_token);
    this.auth.next(authResponse);
  }

  getAuth(): AuthResponse {
    return this.auth.getValue();
  }

  clearAuth() {
    localStorage.removeItem(AuthStore.AUTH_TOKEN_KEY);
    this.auth.next(null);
  }
}
