import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

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
    const lstFromLocalStorage = JSON.parse(localStorage.getItem('lista de tareas'));
    if (lstFromLocalStorage != null && lstFromLocalStorage.length > 0){
      lstFromLocalStorage.forEach((item) => {
        this.list.push(new TodoItem(item.id, item.description, item.isCompleted));
      });
    }
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    localStorage.setItem('lista de tareas', JSON.stringify(this.list));
    this.list = this.list.slice();
  }

  onTodoItemCreated(item){
    this.list.push(item);
    this.lastItemId ++;
    item.id = this.lastItemId;
    localStorage.setItem('lista de tareas', JSON.stringify(this.list));
    this.list = this.list.slice();
  }

  onTodoItemRemoved($event){
    const elementSplice = this.list.indexOf($event);
    this.list.splice(elementSplice, 1);
    localStorage.setItem('lista de tareas', JSON.stringify(this.list));
    this.list = this.list.slice();
  }

}
