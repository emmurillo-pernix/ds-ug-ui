import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthStore } from './auth/store';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.withCredentials) {
      req = req.clone({ withCredentials: false, setHeaders: { Authorization: `${this.auth.getAuth().auth_token}` } });
    }
    return next.handle(req);
  }
}
