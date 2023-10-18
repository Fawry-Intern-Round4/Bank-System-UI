import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserRegister } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(11),
        Validators.maxLength(15),
      ],
    ],
    address: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  get firstName() {
    return this.signupForm.controls['firstName'];
  }

  get lastName() {
    return this.signupForm.controls['lastName'];
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get phoneNumber() {
    return this.signupForm.controls['phoneNumber'];
  }

  get address() {
    return this.signupForm.controls['address'];
  }

  submitDetails() {
    this.authService
      .registerUser(this.signupForm.value as UserRegister)
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Register Successfully',
          });
          this.router.navigate(['login']);
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
