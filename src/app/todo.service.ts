import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) {

  this.list = storage.cargarLocalStorage();
   }

  add(task: TodoItem) {
    const id = this.lastItemId;
    task.id = id;
    this.storage.grabarLocalStorage(task);
    // this.list.push(task);
    this.lastItemId += 10;
  }

  remove(id) {
    this.storage.eliminarLocalStorage(id);

    // const index = this.list.findIndex((element) => element.id === id);
    // this.list.splice(index, 1);
  }

  incompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;

  }
  completedSize() {
    return  this.list.filter(item => item.isCompleted).length ;
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }
}
