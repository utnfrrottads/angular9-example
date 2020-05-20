import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId: number = 0;
  item = new TodoItem();  
  completed = 0;
  pending = 0;

  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {    
    item.toggleCompleted();
    if(item.isCompleted){
      this.pending = this.pending - 1;
      this.completed = this.completed + 1;
    }else{
      this.completed = this.completed - 1;
      this.pending = this.pending + 1;
    }
  }

  onTodoItemCreated(inputControl){    
    this.lastItemId = this.lastItemId + 1;    
    const model = new TodoItem();

    model.id = this.lastItemId;
    model.description = inputControl.value;
    model.isCompleted = false;   
    
    this.list.push(
       model
    );
    this.pending = this.pending + 1
  }

  onTodoItemRemoved(item: TodoItem){    
    const index = this.list.findIndex(each => each.id === item.id);    
    this.list.splice(index, 1);    
    if(item.isCompleted){
      this.completed = this.completed - 1;
    }else{
      this.pending = this.pending - 1;
    }
  }

}
