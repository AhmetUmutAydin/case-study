import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INVALID_ERROR_MESSAGE } from '@shared/constants/error-messages';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.createforgetPasswordForm();
  }

  private createforgetPasswordForm(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.forgetPasswordForm.valid) {
      this.router.navigate(['/']);
    } else {
      this.toastr.error(INVALID_ERROR_MESSAGE);
    }
  }
}
