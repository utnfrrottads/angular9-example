import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() Add = new EventEmitter<TodoItem>();
  constructor() { }

  AddTask(InputController)
  {
    let Item = new TodoItem();
    Item.description = InputController.value;

    this.Add.emit(Item);
    InputController.value = '';
  }
}