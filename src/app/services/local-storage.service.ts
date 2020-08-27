import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly baseUrl = 'http://localhost:3000/api/';
  localStorage = window.localStorage;

  constructor() { }

  getBaseUrl(){
    return this.baseUrl;
  }
}
