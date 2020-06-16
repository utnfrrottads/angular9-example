import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: any[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeItem(id) {
    this.itemRemoved.emit(id);
  }

  completeTask(item:TodoItem) {
    this.itemStateChanged.emit(item);
  }
}