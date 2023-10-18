import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { saveToken } from 'src/app/environments/environments';
import { UserLogin, userAuthResponse } from 'src/app/interfaces/auth';
import { ResponseModel } from 'src/app/interfaces/resposeModel';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    this.authService.loginUser(this.loginForm.value as UserLogin).subscribe(
      (response) => {
        saveToken(response.payload.token);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successfully',
        });

        this.router.navigate(['/home']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      }
    );
  }
}
