import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss', '../app.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  remove(item: TodoItem) {
    this.itemRemoved.emit(item.id);
  }

  toggle(item: TodoItem) {
    this.itemStateChanged.emit(item.id);
  }
}
