import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() list = [];
  @Output() removeItem = new EventEmitter <TodoItem> ();

  remove(item:TodoItem){
    this.removeItem.emit(item);
  }

  changeStatus(item:TodoItem){
    item.toggleCompleted();
  }
}
