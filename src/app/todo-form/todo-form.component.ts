import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as customValidators from '../custom-validators';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnChanges {
  @Input() itemToEdit: TodoItem = null;
  @Output() add = new EventEmitter<TodoItem>();
  @Output() update = new EventEmitter<TodoItem>();

  editMode = false;
  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required, customValidators.isUrl]),
  });

  ngOnChanges(): void {
    if (this.itemToEdit) {
      this.editMode = true;
      this.taskForm.patchValue(this.itemToEdit);
    }
  }

  get description() {
    return this.taskForm.get('description');
  }
  get url() {
    return this.taskForm.get('url');
  }

  onSubmit() {
    const task = new TodoItem();
    task.description = this.description.value;
    task.url = this.url.value;

    if (this.editMode) {
      task.id = this.itemToEdit.id;
      task.isCompleted = this.itemToEdit.isCompleted;
      this.update.emit(task);
    } else {
      task.isCompleted = false;
      this.add.emit(task);
    }
    this.itemToEdit = null;
    this.editMode = false;
    this.taskForm.reset();
  }
}
