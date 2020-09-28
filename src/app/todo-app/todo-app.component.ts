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

  constructor(private service: TodoService) {}
  taskEditable:TodoItem = null;

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
  onTodoItemEdit(task: TodoItem){
    this.taskEditable = task;
  }
  onTodoItemUpdated(task: TodoItem){
    this.service.update(task);
  }
}
