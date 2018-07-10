import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'googlemaps';

@Injectable()
export class HttpService {
  service: any;

  constructor(private http: HttpClient) {
    this.service = google.maps.DistanceMatrixService;
  }

  url = environment.apiUrl;

  get(path: string, authorized: boolean = true): any {
    return this.http.get(`${this.url}${path}.json`, { withCredentials: authorized });
  }

  post(path: String, body: any, authorized: boolean = true): any {
    return this.http.post(`${this.url}${path}.json`, body, { withCredentials: authorized });
  }
}
