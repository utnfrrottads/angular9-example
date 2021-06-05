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
  getLocalStorageList(){
    return this.service.getAll();
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  lsOnTodoItemRemoved(id) {
    this.service.lsRemove(id);
  }
  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }
  onTodoItemCreated(task) {
    this.service.add(task)
  }
}
