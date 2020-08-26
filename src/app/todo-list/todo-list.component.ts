import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  // https://stackoverflow.com/questions/49141809/angular-input-change-detection-performance-with-mat-table-data-source
  @Input() dataSource: MatTableDataSource<TodoItem>;
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  @Output() itemEdit = new EventEmitter<TodoItem>();

  columnsToDisplay = ['isCompleted', 'description', 'url', 'actions'];

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
