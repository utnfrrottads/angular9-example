import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  
  @Input() list: TodoItem[] = [];

  deleteTask(item: TodoItem){
    this.itemRemoved.emit(item);
    }

  changeState(item: TodoItem){
    this.itemStateChanged.emit(item);
    }
  }


