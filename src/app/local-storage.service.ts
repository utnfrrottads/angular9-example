import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  
  myStorage = localStorage;
  constructor() { }
  getName() {
    return 'LocalStorageService';
  }
  cargarLocalStorage(){
    const list = [];
    Object.values(this.myStorage).forEach(p => {
      list.push(JSON.parse(p)); 

    });
    return list; 
    
  }

  grabarLocalStorage(item: TodoItem){    
    item.id = this.myStorage.length;
    localStorage.setItem(item.id.toString(), JSON.stringify(item));
    
  }

  updateLocalStorage(item: TodoItem){
    this.myStorage.removeItem(item.id.toString());
    this.myStorage.setItem(item.id.toString(), JSON.stringify(item));

  }

  deleteItem(key){    
    const value = this.myStorage.getItem(key);
    console.dir(value);
    if(value !== undefined && value){
      this.myStorage.removeItem(key);
    }
  }

  Save(list: any[]){
    this.Clean();
    list.forEach(x => {
      this.myStorage.setItem(x.id.toString(), JSON.stringify(x));

    });
  }

  Clean(){
    this.myStorage.clear();
  }

}
