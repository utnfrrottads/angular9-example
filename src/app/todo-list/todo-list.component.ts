import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() list = [];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  constructor() {}

  onItemRemove(item: TodoItem) {
    this.itemRemoved.emit(item.id);
  }

  onItemStateChanged(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }
}
