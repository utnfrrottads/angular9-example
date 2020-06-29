import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list = [];
  lastItemId = 0;

  constructor(private localStorageService: LocalStorageService) { }
  
  loadList() {
    const {list, lastItemId} = this.localStorageService.listInitialization();
    this.list = list;
    this.lastItemId = lastItemId;
  }

  saveList() {
    this.localStorageService.listSave(this.list, this.lastItemId);
  }

  addTask(task: any) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 1;
    this.saveList();
  }

  removeTask(index: number) {
    // const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
    this.saveList();
  }

  clearAll() {
    this.localStorageService.listClear();
  }

  completedSize() {
    return this.list.filter(item => item.isCompleted).length;
  }

  uncompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;
  }
}
