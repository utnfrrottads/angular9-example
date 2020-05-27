import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    @Input() ListItems = [];
    @Output() ItemRemoved = new EventEmitter<TodoItem>();

    Remove(Item: TodoItem)
    {
      this.ItemRemoved.emit(Item);
    }

    ChangeState(Item: TodoItem)
    {
      Item.toggleCompleted();
    }
}
