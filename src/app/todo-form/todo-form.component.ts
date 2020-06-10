import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter();

  save(description){
    if(!description.value || description.value === '') {
      return;
    }
    let task = new TodoItem();
    task.description = description.value;
    task.isCompleted = false;
    this.add.emit(task);
    description.value = '';
  }
}

