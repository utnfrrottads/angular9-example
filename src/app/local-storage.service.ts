import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() { }
  getName() {
    return 'LocalStorageService'
  }
  setItem(key:string, value:string){
    localStorage.setItem(key,value);
  }
  getItem(key: string){
    localStorage.getItem(key);
  }
  removeItem(key:string) {
    localStorage.removeItem(key);
  }
  clear(){
    localStorage.clear(); 
  }
}
