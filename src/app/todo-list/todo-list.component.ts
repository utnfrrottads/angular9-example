import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() list;
  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();

  constructor() {}

  ngOnInit(): void {}

  removeItem(item: TodoItem) {
    this.itemRemoved.emit(item);
  }

  toggleStateItem(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }
}
