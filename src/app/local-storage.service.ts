import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  list: any = [];
  constructor() {    
  }
  getName() {
    return 'LocalStorageService';
  }
  cargarLocalStorage(){    
    
    debugger;
    Object.values(localStorage).forEach(p => {
      this.list.push(JSON.parse(p)); 

    });
    return this.list;
  }

  grabarLocalStorage(item: TodoItem){
    debugger;
    item.id = localStorage.length;
    localStorage.setItem(item.id.toString(), JSON.stringify(item));
  }

  updateLocalStorage(item: TodoItem){    
    localStorage.removeItem(item.id.toString());
    localStorage.setItem(item.id.toString(), JSON.stringify(item));

  }

  eliminarLocalStorage(key){    
    const value = localStorage.getItem(key);
    console.dir(value);
    if(value !== undefined && value){
      localStorage.removeItem(key);
    }
  }
}
