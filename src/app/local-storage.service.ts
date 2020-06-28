import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() {
    this.cargarLocalStorage();
   }
  getName() {
    return 'LocalStorageService';
  }
  cargarLocalStorage(){
    const items = JSON.parse(localStorage.getItem('todo-item'));
    return items;
  }

  grabarLocalStorage(item: TodoItem){
    localStorage.setItem(item.id.toString(), JSON.stringify(item));
  }

  eliminarLocalStorage(key){
    const value = localStorage.getItem(key);
    console.dir(value);
    if(value !== undefined && value){
      localStorage.removeItem(key);
    }
  }

  // editarLocalStorage(key, item){
  //   let value = localStorage.getItem(key);
  //   console.dir(value);
  // }
}
