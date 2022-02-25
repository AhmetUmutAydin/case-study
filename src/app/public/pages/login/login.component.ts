import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Login } from '@shared/actions';
import { INVALID_USER_ERROR_MESSAGE } from '@shared/constants/error-messages';
import { switchMap } from 'rxjs';
import { AuthState } from '@shared/states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store
        .dispatch(new Login(email, password))
        .pipe(switchMap(() => this.store.selectOnce(AuthState.getAuthorized)))
        .subscribe((authorize) => {
          if (authorize) {
            -this.router.navigate(['/user']);
          } else {
            this.displayError();
          }
        });
    } else {
      this.displayError();
    }
  }

  private displayError(): void {
    this.toastr.error(INVALID_USER_ERROR_MESSAGE);
  }
}
