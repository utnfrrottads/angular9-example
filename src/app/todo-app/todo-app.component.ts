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

  constructor(private todoService: TodoService) { }
  
  ngOnInit() {
    this.todoService.loadList();
  }

  getList() {
    return this.todoService.list;
  }

  onTodoItemRemoved(index: number) {
    this.todoService.removeTask(index);
  }

  onItemStateChanged(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    this.todoService.saveList();
  }

  onTodoItemCreated(task: any) {
    this.todoService.addTask(task)
  }
}
