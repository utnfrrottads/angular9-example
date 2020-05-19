import { Component, OnInit, Input } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  
  @Input() tema='';

  list: TodoItem[] = [];
  nextItemId = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(item: TodoItem){
    let index=this.list.findIndex(i=>i.id===item.id);
    this.list.splice(index,1);
  }

  onTodoItemCreated(item: TodoItem){
    item.id=this.nextItemId;
    this.list.push(item);
    this.nextItemId++;
  }
}
