import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list = [];
  lastItemId = 0;

  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 10;
  }

  update(task: TodoItem) {
    const index = this.list.findIndex((element) => element.id === task.id);
    this.list.splice(index, 1, task);
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
  }

  incompletedSize() {
    return this.list.filter((item) => !item.isCompleted).length;
  }
  completedSize() {
    return this.list.filter((item) => item.isCompleted).length;
  }
}
