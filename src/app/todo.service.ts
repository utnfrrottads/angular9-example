import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list = [];
  idStorage = window.localStorage;

  constructor(private storage: LocalStorageService) {
    if (this.storage.myStorage.length === 0) {
      this.idStorage.setItem('lastInsertedId', '0');
    }
  }

  add(task) {
    const lastId = parseInt(this.idStorage.getItem('lastInsertedId'));
    task.id = lastId;
    const newLastId = 1 + lastId;
    this.idStorage.setItem('lastInsertedId', String(newLastId));
    this.storage.save(task);
  }

  removeItem(id) {
    this.storage.delete(String(id));
    this.list = this.getLocalList();
  }

  updateItemState(task: TodoItem) {
    this.storage.updateState(task);
    this.list = this.getLocalList();
  }

  getLocalList() {
    return this.storage.getStorage();
  }

  incompletedSize() {
    return this.getLocalList().filter((item) => !item.isCompleted).length;
  }
  completedSize() {
    return this.getLocalList().filter((item) => item.isCompleted).length;
  }
}
