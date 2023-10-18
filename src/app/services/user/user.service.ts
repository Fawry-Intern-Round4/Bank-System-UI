import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getToken, myHost } from 'src/app/environments/environments';
import { ResponseModel } from 'src/app/interfaces/resposeModel';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = myHost();
  private token = getToken();

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getUser(): Observable<ResponseModel<User>> {
    return this.http.get<ResponseModel<User>>(`${this.baseUrl}/user`, {
      headers: this.headers,
    });
  }
}
