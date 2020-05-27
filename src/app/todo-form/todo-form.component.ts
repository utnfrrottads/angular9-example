import { ToDoItem } from './../model/todo-item';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  nextTaskId : number = 1;
  newTask = new ToDoItem();
  
  @Output() newTaskAdded = new EventEmitter<ToDoItem>();
  

  onSubmit(){
    this.newTask.id = this.nextTaskId;
    this.nextTaskId++;
    
    this.newTaskAdded.emit(this.newTask);

    this.newTask = new ToDoItem();
  }

}
