import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  list = [];
  lastItemId = 0;

  onTodoItemCreated(event: string){
    this.lastItemId ++;

    let item = new TodoItem();
    item.id = this.lastItemId;
    item.description = event;
    item.isCompleted = false;

    this.list.push(item);
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(item: TodoItem){
    const index = this.list.findIndex(each => each.description === item.description);
    this.list.splice(index, 1);
  }
}
