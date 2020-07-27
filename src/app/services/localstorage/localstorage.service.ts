import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  persist(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieve(key){
    return JSON.parse(localStorage.getItem(key));
  }
}
