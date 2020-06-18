import { TaskListService } from './../services/task-list/task-list.service';
import { Task } from '../model/task';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() newTaskAdded = new EventEmitter();
  
  taskForm = new FormGroup({
    description: new FormControl(''),
  });

  constructor(private taskListService : TaskListService){
  }

  onSubmit(){
    let description = this.taskForm.value.description;
    this.taskListService.addTask(description);
    
    this.newTaskAdded.emit();

    this.taskForm.controls.description.setValue("");
  }

}
