import { TodoItem } from './../model/todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent{
  
  list = [];
  lastItemId = 0;

  onItemStateChanged( item: TodoItem ) {
    item.toggleCompleted();
  };

  onTodoItemRemoved( index: number ) {
    this.list.splice( index, 1 );
  };

  onTodoItemCreated( item: TodoItem ) {
    this.lastItemId += 1;
    item.id = this.lastItemId;
    this.list.push( item );
  };
}
