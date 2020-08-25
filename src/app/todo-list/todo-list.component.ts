import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent{
  @Input() list: TodoItem[];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  @Output() itemEdit = new EventEmitter<TodoItem>();

  removeItem(id: number) {
    this.itemRemoved.emit(id);
  }

  completeTask(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }

  editItem(item: TodoItem) {
    this.itemEdit.emit(item);
  }
}
