import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectedTask:TodoItem;
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
  onTodoItemCreated(task) {
    this.service.add(task);
  }
  setTaskSelected(task) {
    this.selectedTask = task;
  }
}
