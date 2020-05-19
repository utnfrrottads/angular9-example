import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  @Input() list: TodoItem[]=[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();


  toggleCompleted(item: TodoItem){
    this.itemStateChanged.emit(item);
  }

  deleteTodoItem(item: TodoItem){
    this.itemRemoved.emit(item);
  }
}
