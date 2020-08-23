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
    const t = this.list[index];
    t.description = task.description;
    t.url = task.url;
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
