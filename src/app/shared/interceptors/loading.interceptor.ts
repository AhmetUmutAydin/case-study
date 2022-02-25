import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@shared/services/custom/loading.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.requestStarted();
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loadingService.requestEnded();
          }
        },
        () => {
          this.loadingService.resetSpinner();
          return next.handle(request);
        }
      )
    );
  }
}
