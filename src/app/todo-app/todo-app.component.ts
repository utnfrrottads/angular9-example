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

  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
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
  }

  onTodoItemRemoved(item: TodoItem){
    const index = this.list.findIndex(each => each.id === item.id);
    this.list.splice(index, 1);

  }

}
