import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) {}

  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 10;
    this.storage.addPersistentTask(task);
  }

  getLocalList() {
    const localList = this.storage.getStorage();
    if (localList.length > 0) {
      return localList;
    }
    return [];
  }
  
  clearStorage() {
    this.storage.clearStorage();
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
