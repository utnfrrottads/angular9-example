import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  ListItems = [];
  LastItemId = 0;

  OnTodoItemCreated(Item: TodoItem) {
    Item.id = this.LastItemId++;
    this.ListItems.push(Item);
  }

  OnTodoItemRemoved(Item: TodoItem)
  {
    let Index = this.ListItems.findIndex(x => x.id === Item.id);
    this.ListItems.splice(Index, 1);
  }
}
