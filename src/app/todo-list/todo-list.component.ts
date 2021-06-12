import { TodoItem } from './../model/todo-item';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  @Input() list;

  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();

  deleteTask( index: number ) {
    this.itemRemoved.emit( index );
  };

  completedTask( item: TodoItem ) {
    this.itemStateChanged.emit( item );
  };

}
