import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 readonly baseUrl = this.localStorageService.getBaseUrl();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) { }

  signUp(user: string, email: string, password: string) {
    const url = this.baseUrl + 'users';
    const body = {
      user: {
        username: user,
        email,
        password,
      }
    };
    return this.http.post(url, body, {});
  }

  signIn(user: string, password: string) {
    const url = this.baseUrl + 'users/login';
    const body = {
      user: {
        email: user,
        password,
      },
    };

    return this.http.post(url, body, {});
  }
}
