import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() add = new EventEmitter<TodoItem>();

  item: TodoItem;
  constructor() {}

  ngOnInit(): void {}

  addItem(desc: string) {
    if (desc) {
      this.item = new TodoItem();
      this.item.description = desc;
      this.add.emit(this.item);
    }
  }
}
