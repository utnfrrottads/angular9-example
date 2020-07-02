import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() { }
  getName() {
    return 'LocalStorageService'
  }
  getTasks() {
    let storedList = localStorage.getItem("taskList");
    if (storedList === null) {
      let tasks = [];
      return tasks;
    }
    else  {
      let tasks = JSON.parse(localStorage.getItem('taskList')).map(each => new TodoItem(each));
      return tasks;
    }
  }

  removeTask(list) {
    localStorage.removeItem("tasklist");
    this.setTasks(list);
  }

  setTasks(list) {
    localStorage.setItem("taskList",JSON.stringify(list));
  }


}
