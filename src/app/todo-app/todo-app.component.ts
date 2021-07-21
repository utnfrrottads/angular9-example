import { Component } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent  {

  constructor(
    private service: TodoService
  ) {}

  ngOnInit() {
    this.service.loadListFromLocalStorage();
  }

  getList() {
    return this.service.list;
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  onItemStateChanged(item: TodoItem) {
    this.service.updateItemState(item);
  }
  onTodoItemCreated(task) {
    this.service.add(task);
  }
}
