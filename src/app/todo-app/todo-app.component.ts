import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(id: number) {
    const index = this.list.findIndex(each => each.id === id);
    this.list[index].toggleCompleted();
  }

  onTodoItemCreated(description: string) {
    if (description === ''){
      return;
    }
    this.list.push(new TodoItem(this.lastItemId, description));
    this.lastItemId = this.lastItemId + 1;
  }

  onTodoItemRemoved(id: number) {
    const index = this.list.findIndex(each => each.id === id);
    this.list.splice(index, 1);
  }
}
