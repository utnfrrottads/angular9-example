import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() list: TodoItem[];

  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();

  remove(item: TodoItem){
    this.itemRemoved.emit(item);
  }

  toggle(item: TodoItem){
    this.itemStateChanged.emit(item);
  }

  getItemStatus(isCompleted){
    if(isCompleted){
      return 'Completed';
    }
    else{
      return 'Pending';
    }
  }
}
