import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent{

  @Output() add = new EventEmitter<string>();

  addTask(task){
    if (task.value===''){
      return;
    }
    else {
      this.add.emit(task.value);
      task.value = '';
    }
  }
}
