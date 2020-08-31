import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';
  localStorage = window.localStorage;

  getBaseUrl(){
    return this.baseUrl;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token){
    localStorage.setItem('token', token);
  }

  setUserName(userName){
    localStorage.setItem('username', userName);
  }
}
