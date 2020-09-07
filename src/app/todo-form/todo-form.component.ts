import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Input() selectedTask: TodoItem;
  @Output() add = new EventEmitter();
  taskForm: FormGroup;
  urlRegEx = "^^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$";
  mailRegEx = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private service:TodoService) {
    this.taskForm = new FormGroup({
      id: new FormControl(""), // Hidden
      description: new FormControl("", [Validators.required]),
      url: new FormControl("", [Validators.required, Validators.pattern(this.urlRegEx)]),
      mail: new FormControl("", [Validators.required, Validators.pattern(this.mailRegEx)]),
    })
  }
  
  ngOnChanges(){
    if (this.selectedTask !== undefined && this.selectedTask.id !== null) {
      this.taskForm.patchValue({
        id: this.selectedTask.id,
        description: this.selectedTask.description,
        url: this.selectedTask.url,
        mail: this.selectedTask.mail,
      })
    }
  }

  onSubmit(){
    let task = new TodoItem();
    task.description = this.taskForm.controls.description.value;
    task.isCompleted = false;
    task.url = this.taskForm.controls.url.value;
    task.mail = this.taskForm.controls.mail.value;
    if (this.taskForm.controls.id.value) {
      task.id = this.taskForm.controls.id.value;
      this.service.remove(task.id);
    }
    this.add.emit(task);
    if (!this.taskForm.controls.id.value) {
      console.log(`Item submitted`)
    } else {
      console.log(`Item ${this.taskForm.controls.id.value} edited successfully`)
    }
    this.taskForm.reset();
  }

  reset() {
    this.taskForm.reset();
  }
}
