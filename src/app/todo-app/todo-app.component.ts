import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { element } from 'protractor';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit  {

  list: any = [];
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {    
    this.list = this.service.getList();
  }

  getList() {    
    return this.list;
    
  }

  onTodoItemRemoved(id) {    
    this.service.remove(id);

  }
  onItemStateChanged(item: TodoItem) {    
    // item.toggleCompleted();
    if(item.isCompleted){
      item.isCompleted = false;
    }else{
      item.isCompleted = true;
    }
    this.service.update(item);

  }
  onTodoItemCreated(task: TodoItem) {    
    this.service.add(task);

  }
}
