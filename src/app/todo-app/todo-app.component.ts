import { Component } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  list : TodoItem[] = [];
  // lastItemId = 0;

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemCreated(newItem : TodoItem){
    this.list.push(newItem);
  }

  onTodoItemRemoved(item : TodoItem){
    const index = this.list.findIndex(each => each.id === item.id);
    this.list.splice(index,1);
  }

  // onItemEdited(item : TodoItem){

  // }
}
