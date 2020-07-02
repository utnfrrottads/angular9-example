import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  
  list : TodoItem[] = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { 
    this.list = this.storage.getTasks();
    console.log(this.list);
  }
  

  add(task) {
    this.lastItemId = this.getLastId();
    const id = this.lastItemId;
    task.id = id;
    let taskAdded = new TodoItem(task);
    this.list.push(taskAdded);
    this.lastItemId += 10;
    this.storage.setTasks(this.list);
    console.log(this.storage.getTasks());
  }
  getLastId() {
    let lastId = 0;
    this.list.forEach(e => {
      if(e.id >= lastId) {
        lastId = e.id;
      }
    })
    return lastId + 1;
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
    this.storage.removeTask(this.list);
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

  changeState(item:TodoItem) {
    const index = this.list.findIndex((element) => element.id === item.id);
    this.list[index] = item;
    this.storage.setTasks(this.list);
  }
}
