import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list:TodoItem[] = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { }
  
  add(task:TodoItem) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 1;
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
  }

  update(task:TodoItem) {
    const index = this.list.findIndex(element => element.id === task.id);
    this.list[index].description=task.description;
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
