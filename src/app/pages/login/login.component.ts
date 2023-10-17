import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLogin, userAuthResponse } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    this.authService
      .loginUser(this.loginForm.value as UserLogin)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
