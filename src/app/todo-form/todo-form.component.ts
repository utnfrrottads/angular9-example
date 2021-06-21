import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addItem = () => {
    if (this.item.description?.trim().length > 0) {
      this.add.emit(this.item);
    }
  };
}
