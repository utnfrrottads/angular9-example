import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { element } from 'protractor';
/** */
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
  onTodoItemRemoved(id){
    let index = this.list.findIndex(element => element.id === id);
    this.list.splice(index,1);
  }
  onItemStateChanged(item: TodoItem) {
    let index = this.list.findIndex(i => i.id === item.id);
    this.list[index].toggleCompleted();
    console.log(this.list[index]);
    
  }
  onTodoItemCreated(task){
    let id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId +=1;
  }
}
