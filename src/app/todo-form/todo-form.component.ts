import { Component, OnInit, Output, EventEmitter, Input, ComponentFactoryResolver } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
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
    taskUrl: new FormControl('', [UrlValidator]),
  });

  constructor(private service: TodoService) {}

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

  edit() {
    this.editingTask.description = this.taskForm.controls.taskName.value;
    this.editingTask.url = this.taskForm.controls.taskUrl.value;

    this.service.edit(this.editingTask);
    this.cancelEditing.emit();
    this.taskForm.reset();
  }
  cancelEdit() {
    this.cancelEditing.emit();
    this.taskForm.reset();
  }

  editingTaskName() {
    if (this.isEditingTask) {
      return this.editingTask.description;
    }
  }
  editingTaskUrl() {
    if (this.isEditingTask) {
      return this.editingTask.url;
    }
  }
}

export function UrlValidator(control: AbstractControl) {
  // valid url and empty strings.
  if (validURL(control.value) || control.value == '') {
    return null;
  }
  return { error: true };
}

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return pattern.test(str);
}
