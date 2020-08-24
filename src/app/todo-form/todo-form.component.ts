import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as customValidators from '../custom-validators';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required, customValidators.isUrl]),
  });
  @Output() add = new EventEmitter();

  get description() {
    return this.taskForm.get('description');
  }
  get url() {
    return this.taskForm.get('url');
  }

  onSubmit() {
    let task = new TodoItem();
    task.description = this.description.value;
    task.url = this.url.value;
    task.isCompleted = false;
    this.add.emit(task);
    this.taskForm.reset();
  }
}
