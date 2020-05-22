import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  list: Array<TodoItem> = [];
  lastItemId = 0;
  constructor() {}

  ngOnInit(): void {}

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(item: TodoItem) {
    this.list = this.list.filter((e) => e !== item);
  }

  onTodoItemCreated(item: TodoItem) {
    item.id = this.lastItemId + 1;
    this.lastItemId += 1;
    this.list.push(item);
  }
}
