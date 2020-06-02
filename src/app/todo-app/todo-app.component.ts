import { Component } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  list = [];
  lastItemId = 1;
  
  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
   }

  onTodoItemCreated(item: TodoItem ){
    item.id = this.lastItemId;
    this.lastItemId += 1;
    this.list.push(item);
  }

  onTodoItemRemoved(item: TodoItem){
    let index = this.list.indexOf(item);
    if (index>=0){
      this.list.splice(index,1);
    }
  }
  
}
