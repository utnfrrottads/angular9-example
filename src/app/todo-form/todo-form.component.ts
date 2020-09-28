import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  taskForm = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
    url: new FormControl('', [Validators.required, myUrlValidator])
  });

  flagEdit:boolean = false;
  @Output() add = new EventEmitter();
  @Input() taskEditable:TodoItem = null;
  @Output() save = new EventEmitter();

  saveTask() {
    let task = new TodoItem();
    task.description = this.taskForm.value.taskDescription;
    task.url = this.taskForm.value.url;
    if (this.flagEdit){
      task.id = this.taskEditable.id;
      task.isCompleted = this.taskEditable.isCompleted;
      this.save.emit(task); 
    }else{
      this.add.emit(task);
    }
    this.flagEdit = false;
    this.taskForm.patchValue({taskDescription: '', url: ''});
  }

  ngOnChanges():void{
    if(this.taskEditable){
      this.flagEdit = true;
      this.taskForm.patchValue(this.taskEditable);  
    }
  }

}

export function myUrlValidator(control: AbstractControl){
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (!control.value.match(regex)){
    return { urlValid: true}
  }
  
  return null;
}
