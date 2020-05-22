import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Output() add = new EventEmitter<string>();
  constructor() {}

  onAddElement(inputControl) {
    if (inputControl.value !== '') {
      this.add.emit(inputControl.value);
    }
    inputControl.value = '';
  }
}
