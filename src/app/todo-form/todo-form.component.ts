import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  taskForm = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
  });

  flagEdit:boolean = false;
  @Output() add = new EventEmitter();
  @Input() taskEditable = null;
  @Output() save = new EventEmitter();

  saveTask() {
    let task = new TodoItem();
    task.description = this.taskForm.value.taskDescription;
    if (this.flagEdit){
      task.id = this.taskEditable.id;
      task.isCompleted = this.taskEditable.isCompleted;
      this.save.emit(task);
    }else{
      this.add.emit(task);
    }
    this.flagEdit = false;
    this.taskForm.setValue({taskDescription: ''});
  }

  ngOnChanges():void{
    if(this.taskEditable){
      this.flagEdit = true;
      console.log("now is true");
      
      this.taskForm.patchValue(this.taskEditable);  
    }
  }

}

