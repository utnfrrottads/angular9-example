import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  
  list = this.todoService.list;

  constructor(
    private todoService: TodoService
  ){}

  onTodoItemCreated(task: string){
    this.todoService.add(task);
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    this.todoService.save();
  }

  onTodoItemRemoved(item: TodoItem){
    this.todoService.remove(item);
  }

  getList(){
    return this.list;
  }
}
