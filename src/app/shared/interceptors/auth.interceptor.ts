import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.setAppId(request);
    return next.handle(request);
  }

  private setAppId(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        'app-id': `${environment.appId}`,
      },
    });
  }
}
