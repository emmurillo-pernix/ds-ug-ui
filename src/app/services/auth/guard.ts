import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthStore } from './store';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public authStore: AuthStore, public router: Router) {}

  canActivate(): boolean {
    if (!this.authStore.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
