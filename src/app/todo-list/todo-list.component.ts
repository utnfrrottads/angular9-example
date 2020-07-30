import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() list: any[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  @Output() itemEdited = new EventEmitter();

  constructor() {}
  ngOnInit() {}
  removeItem(id) {
    this.itemRemoved.emit(id);
  }

  completeTask(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }

  editTask(item: TodoItem) {
    this.itemEdited.emit(item);
  }
  CompleteUrl(url) {
    if (url === null || url === undefined) return '';

    // completa la URL para que se pueda navegar por click.
    if (!url.startsWith('http')) {
      url = '//' + url;
    }
    return url;
  }
}
