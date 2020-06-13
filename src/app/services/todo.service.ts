import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  list = [];
  lastItemId = 0;

  add(task: string){
    this.lastItemId ++;
    let item = new TodoItem();
    item.id = this.lastItemId;
    item.description = task;
    item.isCompleted = false;
    this.list.push(item);
  }

  remove(item: TodoItem){
    const index = this.list.findIndex(each => each.description === item.description);
    this.list.splice(index, 1);
  }

  getCompletedItems(){
    return this.list.filter(item => item.isCompleted).length;
  }

  getPendingItems(){
    return this.list.filter(item => !item.isCompleted).length;
  }
}
