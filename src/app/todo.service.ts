import { TodoItem } from './model/todo-item';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list: TodoItem[] = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { }
  
  add(task: TodoItem) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 1;
    this.storage.saveListInLocalStorage( this.list, this.lastItemId );
  }

  remove(id: number) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
    if ( this.list.length === 0 ) {
      this.storage.clearLocalStorage();
    } else {
      this.storage.saveListInLocalStorage( this.list, this.lastItemId );
    }
  }
  
  loadListFromLocalStorage() {
    let { list, lastItemId } = this.storage.loadListFromLocalStorage();
    this.list = list;
    this.lastItemId = lastItemId;
  }

  updateItemState(task: TodoItem) {
    task.isCompleted = !task.isCompleted;
    const index = this.list.findIndex( item => item.id === task.id );
    this.list[index] = task;
    this.storage.saveListInLocalStorage( this.list, this.lastItemId );
  }

  incompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;
  }

  completedSize() {
    return this.list.filter(item => item.isCompleted).length;
  }
}
