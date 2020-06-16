import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  myStorage = window.localStorage;
  constructor() {}

  getStorage() {
    const storageElements = [];
    for (let index = 0; index < this.myStorage.length; index++) {
      const key = this.myStorage.key(index);
      if (key !== 'lastInsertedId') {
        // This is to avoid adding the item lastInsertedId to the array of tasks
        const element = this.myStorage.getItem(key);
        storageElements.push(JSON.parse(element));
      }
    }
    return storageElements;
  }

  save(task: TodoItem) {
    const jsonTask = JSON.stringify(task);
    this.myStorage.setItem(String(task.id), jsonTask);
  }

  delete(id: string) {
    this.myStorage.removeItem(id);
  }

  updateState(task: TodoItem) {
    const taskToUpdate = JSON.parse(this.myStorage.getItem(String(task.id)));
    taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
    this.save(taskToUpdate);
  }
}
