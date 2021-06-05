import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  lsArray = [];  //localStorageArray

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
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear(){
    localStorage.clear(); 
  }
  getLocalStorage(){
    
   if (localStorage.length === 0){
     console.log("local storage esta vacio");
   }
   else{
    console.log(`localStorage tiene ${localStorage.length} elementos`);
    for (let i = 0; i < localStorage.length; i++) {
      this.lsArray[i] = JSON.parse(localStorage[i]);
      console.log(this.lsArray[i]);
    }
   }
   return this.lsArray;
  }

}
