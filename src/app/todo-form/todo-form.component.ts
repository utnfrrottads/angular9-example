import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import {
  FormGroup,
  FormControl,
  Form,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Output() add = new EventEmitter();
  @Input() editingTask;
  @Input() isEditingTask;
  @Output() cancelEditing = new EventEmitter();

  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskUrl: new FormControl(''),
  });

  constructor(private service : TodoService) {}

  save() {
    let description = this.taskForm.controls.taskName;

    if (!description.value || description.value === '') {
      return;
    }
    let task = new TodoItem();
    task.description = description.value;
    task.isCompleted = false;
    task.url = this.taskForm.controls.taskUrl.value;

    this.add.emit(task);
    this.taskForm.reset();
  }

  edit(){
    this.editingTask.description = this.taskForm.controls.taskName.value;
    this.editingTask.url = this.taskForm.controls.taskUrl.value;

    this.service.edit(this.editingTask)
    this.cancelEditing.emit()
    this.taskForm.reset()
  }
  cancelEdit(){
    this.cancelEditing.emit()
    this.taskForm.reset()
  }

  editingTaskName(){
    if(this.isEditingTask){
      return this.editingTask.description
    }
  }
  editingTaskUrl(){
    if(this.isEditingTask){
      return this.editingTask.url
    }
  }
}

/* Esto no funciona.


export function ValidateUrl(control: AbstractControl) {
  
  if (control.value === '' || !validURL(control.value)) {
    return { validUrl: true };
  }
  console.log("valida")
  return null;
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

*/
