import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getToken, myHost } from 'src/app/environments/environments';
import { UserCard } from 'src/app/interfaces/account';
import { AccountHistory } from 'src/app/interfaces/accountHistory';
import { ResponseModel } from 'src/app/interfaces/resposeModel';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = myHost();
  private token = getToken();

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getUserCards(): Observable<ResponseModel<UserCard[]>> {
    return this.http.get<ResponseModel<UserCard[]>>(`${this.baseUrl}/account`, {
      headers: this.headers,
    });
  }

  createNewUserCard(): Observable<ResponseModel<UserCard>> {
    return this.http.post<ResponseModel<UserCard>>(
      `${this.baseUrl}/account`,
      {},
      {
        headers: this.headers,
      }
    );
  }

  deactiveUserAccountCard(cardId: Number): any {
    return this.http.put<any>(
      `${this.baseUrl}/account/${cardId}?deactivate`,
      {},
      {
        headers: this.headers,
      }
    );
  }

  activeUserAccountCard(cardId: Number): any {
    return this.http.put<any>(
      `${this.baseUrl}/account/${cardId}?activate`,
      {},
      {
        headers: this.headers,
      }
    );
  }

  getMyAccountCardHistory(
    cardId: Number
  ): Observable<ResponseModel<AccountHistory[]>> {
    return this.http.get<ResponseModel<AccountHistory[]>>(
      `${this.baseUrl}/account/${cardId}`,
      {
        headers: this.headers,
      }
    );
  }
}
