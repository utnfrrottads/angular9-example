import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  @Input() list: TodoItem[];
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemEdit = new EventEmitter<TodoItem>();
  ngOnInit(): void {
    console.log(this.list);
  }

  change = (elem: TodoItem) => {
    this.itemStateChanged.emit(elem);
  };

  delete = (elem: TodoItem) => {
    this.itemRemoved.emit(elem.id);
  };

  edit = (elem: TodoItem) => {
    this.itemEdit.emit(elem);
  };
}
