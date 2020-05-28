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

  ngOnInit(): void {
  }


  onTodoItemRemoved(event){
    console.log(event);
    for( var i = 0; i < this.list.length; i++){ 
      if ( this.list[i].id === event.id)
      {
        this.list.splice(i, 1);
      }
    }
  }

  onTodoItemCreated(event){
    //set & save id
    event.id = this.lastItemId +1;
    this.lastItemId++;

    this.list.push(event);
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }
}
