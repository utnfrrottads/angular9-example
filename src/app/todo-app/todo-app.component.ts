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

  taskToEdit:any = "";

  constructor(
    private service: TodoService
  ) {}

  getList() {
    return this.service.list;
  }

  onTodoItemRemoved(id) {
    this.service.remove(id);
  }

  onItemStateChanged(task:TodoItem) {
    task.toggleCompleted();
  }

  onItemCreated(task:TodoItem) {
    this.service.add(task);
  }

  onItemUpdating(task:TodoItem) {
    this.taskToEdit = task;
  }

  onItemUpdated(taskDescription){
    this.taskToEdit.description = taskDescription;
    this.taskToEdit = '';
    //this.service.update(this.taskToEdit);  //en caso de implementar persistencia
  }

}
