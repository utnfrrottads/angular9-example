import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() add = new EventEmitter();

  saveTask() {
    let task = new TodoItem();
    task.description = this.taskForm.value.taskDescription;
    task.isCompleted = false;
    this.add.emit(task);
    this.taskForm.setValue({taskDescription: ''});
  }
  }