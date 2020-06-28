import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { element } from 'protractor';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent  {

  constructor(
    private service: TodoService
  ) {}

  getList() {
    return this.service.list;
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }
  onTodoItemCreated(task: TodoItem) {
    this.service.add(task);
  }
}
