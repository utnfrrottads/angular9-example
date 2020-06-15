import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter<string>();

  addTask(taskInput){
    if(taskInput.value === ''){
      return;
    }
    this.add.emit(taskInput.value);
    taskInput.value = '';
  }

}
