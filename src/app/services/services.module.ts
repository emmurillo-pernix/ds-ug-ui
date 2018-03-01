import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpService } from './http.service';
import { AuthService } from './auth/service';
import { AuthStore } from './auth/store';
import { AuthGuardService } from './auth/guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http.interceptor';
import { ProjectsService } from './projects/service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(AuthStore.AUTH_TOKEN_KEY)
      }
    })
  ],
  declarations: [],
  providers: [
    HttpService,

    AuthGuardService,
    AuthService,
    AuthStore,

    ProjectsService,

    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class ServicesModule { }
