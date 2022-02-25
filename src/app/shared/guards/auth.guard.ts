import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PERMISSION_ERROR_MESSAGE } from '@shared/constants/error-messages';
import { AuthState } from '@shared/states';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private toastr: ToastrService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.store.selectSnapshot(AuthState.getAuthorized)) {
      this.toastr.error(PERMISSION_ERROR_MESSAGE);
      this.router.navigate(['/']);
    }
    return this.store.selectSnapshot(AuthState.getAuthorized);
  }
}
