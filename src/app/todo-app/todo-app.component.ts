import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent {
  list = [];
  lastItemId = 0;
  constructor() {}


  onItemStateChanged(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  onTodoItemCreated(itemDescription: string) {
    this.list.push(
      new TodoItem({
        id: this.lastItemId,
        description: itemDescription,
      })
    );
    this.lastItemId += 1;
  }

  onTodoItemRemoved(itemId: number) {
    this.list = this.list.filter((e) => e.id !== itemId);
  }
}
