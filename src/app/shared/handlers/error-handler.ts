import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHandler implements ErrorHandler {
  toastrService: ToastrService;

  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    if (!this.toastrService) {
      this.toastrService = this.injector.get(ToastrService);
    }
    if (error instanceof HttpErrorResponse) {
      this.toastrService.error('Beklemeyen hata meydana geldi.');
      return;
    } else {
      console.log(error.message);
    }
  }
}
