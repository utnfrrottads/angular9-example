import { Component, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter();

  addTask(inTask){
    var task = new TodoItem();
    task.description = inTask.value;
    this.add.emit(task);

    inTask.value = "";
  }

}
