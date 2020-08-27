import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 readonly baseUrl = this.localStorageService.getBaseUrl();

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) { }

  signIn(email: string, password: string){
    const url = this.baseUrl + 'users/login';
    let body = JSON.stringify({
      "user":{
        "email": email.toString(),
        "password": password.toString()
      }
    });
    return this.http.post<any>(url,body);
  }

  signUp(username: string, email: string, password: string){
    const url = this.baseUrl + 'users';
    let body = JSON.stringify({
      "user":{
        "username": username.toString(),
        "email": email.toString(),
        "password": password.toString()
      }
    });
    return this.http.post<any>(url,body);
  }
}
