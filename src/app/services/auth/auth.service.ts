import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserLogin,
  UserRegister,
  userAuthResponse,
} from '../../interfaces/auth';
import { myHost } from 'src/app/environments/environments';
import { ResponseModel } from 'src/app/interfaces/resposeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = myHost();

  constructor(private http: HttpClient) {}

  registerUser(
    userDetails: UserRegister
  ): Observable<ResponseModel<userAuthResponse>> {
    return this.http.post<ResponseModel<userAuthResponse>>(
      `${this.baseUrl}/auth/register`,
      userDetails
    );
  }

  loginUser(
    userDetails: UserLogin
  ): Observable<ResponseModel<userAuthResponse>> {
    return this.http.post<ResponseModel<userAuthResponse>>(
      `${this.baseUrl}/auth/authenticate`,
      userDetails
    );
  }
}
