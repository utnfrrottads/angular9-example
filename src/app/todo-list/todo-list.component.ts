import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

 
export class TodoListComponent {

  @Input() list = [];
  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  @Output() itemEdited = new EventEmitter<TodoItem>();

  constructor() { }

  itemRemovedClick(item : TodoItem){
    this.itemRemoved.emit(item);
  }

  itemStateChangedClick(item : TodoItem){
    this.itemStateChanged.emit(item);
  }

  // itemEditClick(item : TodoItem){
  //   this.itemEdited.emit(item);
  // }

  getEstado(item : TodoItem){
    if (item.isCompleted) 
      return 'Completada';
    else
      return 'Incompleta';

  }
}
