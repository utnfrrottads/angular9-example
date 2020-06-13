import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) {
    this.list = storage.getItemsInStorage();
  }

  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 10;

    this.storage.updateStorage(this.list);
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);

    this.storage.updateStorage(this.list);
  }

  uncompletedTaskNumber() {
    return this.list.filter((item) => !item.isCompleted).length;
  }
  completedTaskNumber() {
    return this.list.filter((item) => item.isCompleted).length;
  }
}
