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

  getLocalStorageList(){
    return this.service.getAll();
  }
  lsOnTodoItemRemoved(id) {
    this.service.lsRemove(id);
  }
  lsOnItemStateChanged(task: TodoItem){
    task.isCompleted = !task.isCompleted; 
    this.service.lsOnItemStateChanged(task);
  }
  onTodoItemCreated(task) {
    this.service.add(task);
  }
}
