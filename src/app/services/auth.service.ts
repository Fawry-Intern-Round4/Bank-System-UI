import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin, UserRegister } from '../interfaces/auth';
import { myHost } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = myHost();

  constructor(private http: HttpClient) {}

  registerUser(userDetails: UserRegister) {
    return this.http.post(`${this.baseUrl}/auth/register`, userDetails);
  }

  loginUser(userDetails: UserLogin) {
    return this.http.post(`${this.baseUrl}/auth/authenticate`, userDetails);
  }
}
