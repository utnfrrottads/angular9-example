import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './model/user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseUrl = 'https://conduit.productionready.io/api/users';

  constructor(private http: HttpClient) {}

  login(params: { email: string; password: string }) {
    const url = `${this.baseUrl}/login`;
    return this.http.post<{ user: UserData }>(url, {
      user: {
        email: params.email,
        password: params.password,
      },
    });
  }
}
