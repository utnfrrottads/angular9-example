import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: any = [];
  items: Array<TodoItem>;
  lastItemId = 0;

  constructor(private storage: LocalStorageService) {

   }

   getList(){
     this.list = this.storage.cargarLocalStorage();
    return this.list;
   }

  add(task: TodoItem) {    
    const id = this.lastItemId;
    task.id = id;
    this.storage.grabarLocalStorage(task);    
    this.lastItemId += 1;
  }

  remove(id) {
    this.storage.eliminarLocalStorage(id);

  }

  incompletedSize() {    
     this.items = this.storage.cargarLocalStorage();
    return this.items.filter(item => !item.isCompleted).length;

  }
  
  completedSize() {    
    this.items = this.storage.cargarLocalStorage();
    return this.items.filter(item => item.isCompleted).length;

  }

  update(item: TodoItem){
    this.storage.updateLocalStorage(item);
    
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }
}
