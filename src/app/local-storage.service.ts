import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  myStorage = window.localStorage;
  constructor() {}

  addPersistentTask(task: TodoItem) {
    const jsonTask = JSON.stringify(task);
    this.myStorage.setItem(`${task.id}`, jsonTask);
  }

  getStorage() {
    const storageElements = [];
    for (let index = 0; index < this.myStorage.length; index++) {
      const key = this.myStorage.key(index);
      const element = this.myStorage.getItem(key);
      storageElements.push(JSON.parse(element));
    }
    return storageElements;
  }

  clearStorage() {
    this.myStorage.clear();
  }
}
