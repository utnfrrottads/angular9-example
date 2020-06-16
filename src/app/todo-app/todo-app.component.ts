import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { element } from 'protractor';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent {
  constructor(private service: TodoService) {}

  getList() {
    return this.service.getLocalList();
  }
  onTodoItemRemoved(id) {
    this.service.removeItem(id);
  }
  onItemStateChanged(item: TodoItem) {
    this.service.updateItemState(item);
  }
  onTodoItemCreated(task) {
    this.service.add(task);
  }
}
