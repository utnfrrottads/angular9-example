import { Component } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../todo.service';
import { MatTableDataSource } from '@angular/material/table';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent {
  constructor(private service: TodoService) {}
  itemToEdit: TodoItem = null;

  getList() {
    return this.service.list;
  }
  getDataSource() {
    return new MatTableDataSource<TodoItem>(this.service.list);
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }
  onTodoItemCreated(task: TodoItem) {
    this.service.add(task);
  }
  onTodoItemUpdated(task: TodoItem) {
    this.service.update(task);
  }
  onItemEdit(item: TodoItem) {
    this.itemToEdit = item;
  }
}
