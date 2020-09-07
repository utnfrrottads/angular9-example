import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list = [];
  lastItemId = 1;

  constructor(private storage: LocalStorageService) { }
  
  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 1;
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
  }

  uncompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;

  }

  completedSize() {
    return  this.list.filter(item => item.isCompleted).length;
  }

  getName() {
    return 'ToDoService' + this.storage.getName();
  }
}
