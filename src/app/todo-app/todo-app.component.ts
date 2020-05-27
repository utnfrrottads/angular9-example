import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [];
  total = 0;
  lastItemId = 0;
  completed = 0;
  pending = 0;


  constructor() {
   }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    if(item.isCompleted == true){
      this.completed = this.completed + 1;
      this.pending = this.pending - 1;
    }else{
      this.pending = this.pending + 1;
      this.completed = this.completed - 1;
    }
  }

  onTodoItemCreated(input){
    this.lastItemId = this.lastItemId + 1;
    var newItem = new TodoItem();
    newItem.description = input.value;
    newItem.id = this.lastItemId;
    newItem.isCompleted = false;
    this.list.push(newItem);
    this.pending = this.pending + 1;
    this.total = this.total + 1;
  }



  onTodoItemRemoved(item: TodoItem) {
    const index = this.list.findIndex(each => each.id === item.id);
    if(this.list[index].isCompleted == true){
      this.completed = this.completed -1;
    }else{
      this.pending = this.pending - 1;
    }
    this.list.splice(index, 1);
    this.total = this.total - 1;
  }

}
