import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8889';

  get(path: string, authorized: boolean = true): Observable<any> {
    return this.http.get(`${this.url}${path}.json`, { withCredentials: authorized });
  }

  post(path: String, body: any, authorized: boolean = true): Observable<any> {
    return this.http.post(`${this.url}${path}.json`, body, { withCredentials: authorized });
  }
}