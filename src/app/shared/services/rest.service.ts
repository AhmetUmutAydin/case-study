import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceType } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
    private serviceType: ServiceType
  ) {}

  protected get params() {
    return new HttpParams();
  }

  protected get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + this.serviceType + path, {
      params,
    });
  }
}
