import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit  {

  cant: number = 0;
  list: any = [];
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() { 
    this.service.getList(); 
    
  }

  getList() {
    debugger;
    return this.service.list;
    
  }

  onTodoItemRemoved(id) {    
    this.service.remove(id);
    this.getList();
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
    this.getList();
  }
}
