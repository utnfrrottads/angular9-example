import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';


@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list: Array<TodoItem> = [];
  lastItemId = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemCreated(descTarea) {
    this.lastItemId = this.lastItemId + 1;

    let newItem = new TodoItem();
    newItem.description = descTarea;
    newItem.id = this.lastItemId;
    newItem.isCompleted = false;

    this.list.push(newItem)
    
  }
  onTodoItemRemoved(item: TodoItem) {
   this.list.splice(this.list.indexOf(item),1);
  }


}
