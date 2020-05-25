import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  private list = [];
  private lastItemId = 0;
  completeTasks = 0;
  totalTasks = 0;

  ngOnInit(): void {
  }

  get getList(){
    return this.list;
  }

  updateStats(){
    this.totalTasks = this.list.length;

    this.completeTasks = 0;
    for( var i = 0; i < this.list.length; i++){ 
      if(this.list[i].isCompleted === true){
        this.completeTasks++;
      }
    }
  }

  onTodoItemRemoved(event){
    console.log(event);
    for( var i = 0; i < this.list.length; i++){ 
      if ( this.list[i].id === event.id)
      {
        this.list.splice(i, 1);
      }
    }
    
    this.updateStats();
  }

  onTodoItemCreated(event){
    //set & save id
    event.id = this.lastItemId +1;
    this.lastItemId++;

    this.list.push(event);
    console.log(this.list);

    this.updateStats();
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();

    this.updateStats();
  }
}
