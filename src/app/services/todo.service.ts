import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { getMaxListeners } from 'process';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  list: TodoItem[] = this.getList();
  lastItemId = 0;

  constructor(
    private storage: LocalStorageService
  ) {}

  add(task: string){
    this.lastItemId ++;
    let object = {
      id: this.lastItemId,
      description: task,
      isCompleted: false
    };
    this.list.push(new TodoItem(object));
    this.save();
  }

  remove(item: TodoItem){
    const index = this.list.findIndex(each => each.description === item.description);
    this.list.splice(index, 1);

    this.save();
  }

  getCompletedItems(){
    return this.list.filter(item => item.isCompleted).length;
  }

  getPendingItems(){
    return this.list.filter(item => !item.isCompleted).length;
  }

  getList(){
    return this.storage.getList();
  }

  save(){
    this.storage.setList(this.list);
  }
}
