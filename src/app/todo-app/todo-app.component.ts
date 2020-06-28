import { Component, OnInit, Input } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  @Input() list = [];
  lastItemId = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onTodoItemCreated(description: string){
    const newTask = new TodoItem();
    newTask.description = description;
    newTask.id = this.lastItemId + 1;
    newTask.isCompleted = false;
    this.list.push(newTask);
    this.lastItemId += 1;
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(index: number){
    this.list.splice(index, 1);
  }

}
