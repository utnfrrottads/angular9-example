import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter<string>();

  addTask(task_input){
    if(task_input.value === ''){
      return;
    }
    this.add.emit(task_input.value);
    task_input.value = '';
  }

}
