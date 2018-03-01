import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from "../services/auth/service";
import { AuthStore } from "../services/auth/store";
import { AuthResponse, Credentials } from "../models/auth";

@Component({ templateUrl: 'view.html' })
export class LoginComponent {
  private creds = {} as Credentials;


  constructor(private authService: AuthService, private authStore: AuthStore, private router: Router) {}

  authenticate() {
    this.authService.authenticate(this.creds).subscribe(this.handleAuthSuccess, console.error);
  }

  private handleAuthSuccess = (response: AuthResponse) => {
    this.authStore.setAuth(response);
    this.router.navigate([''])
  }
}