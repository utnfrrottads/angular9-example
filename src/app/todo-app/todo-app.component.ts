import { Component } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent  {
  list = [];
  lastItemId = 1;

  onItemCreated(item: TodoItem){
    item.id = this.lastItemId++;
    this.list.push(item);
  }

  onItemRemoved(item: TodoItem){
    let index = this.list.findIndex(t => t.id === item.id);     
    this.list.splice(index, 1);
  }
}
