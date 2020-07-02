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
    let task = {description:description.value, isCompleted:false, id:0 };

    this.add.emit(task);
    description.value = '';
  }
}

