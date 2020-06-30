import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: any = [];

  constructor(private storage: LocalStorageService) { }

   getList(){     
     debugger;
    this.list = this.storage.cargarLocalStorage();
     
   }

  add(task: TodoItem) {    
    this.storage.grabarLocalStorage(task);
    
  }

  remove(id) {
    this.storage.deleteItem(id);

  }

  // incompletedSize() {    
  //   return this.list.filter(item => !item.isCompleted).length;
  //   //  this.items = this.storage.cargarLocalStorage();
  //   // return this.items.filter(item => !item.isCompleted).length;

  // }
  
  // completedSize() {    
  //   return this.list.filter(item => item.isCompleted).length;
  //   // this.items = this.storage.cargarLocalStorage();
  //   // return this.items.filter(item => item.isCompleted).length;

  // }

  update(item: TodoItem){
    this.storage.updateLocalStorage(item);
    
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }
}
