import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() list: any[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  @Output() itemEdit = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  removeItem(id) {
    this.itemRemoved.emit(id);
  }

  completeTask(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }

  updateTask(task: TodoItem) {}
}
