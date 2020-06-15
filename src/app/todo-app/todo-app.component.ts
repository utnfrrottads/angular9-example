import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  list = [];
  lastItemId = 0;

  onTodoItemCreated(desc: string){
    const task = new TodoItem();
    task.description = desc
    task.id = this.lastItemId + 1;
    this.lastItemId += 1;
    task.isCompleted = false;
    this.list.push(task);
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(index: number){
    this.list.splice(index, 1);
  }

}
