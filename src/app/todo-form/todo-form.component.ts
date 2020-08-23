import { Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges {

  taskDescriptionControl = new FormControl('');
  saveButtonText='Create';
  descriptionChangesSubscription:Subscription = null;
  @Output() add = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() descriptionToEdit;

  ngOnChanges(){
    if(!this.descriptionToEdit){
      this.saveButtonText = 'Create';
    }
    else{
      this.saveButtonText = 'Update';
      this.descriptionChangesSubscription = this.taskDescriptionControl.valueChanges.subscribe(
        value => this.descriptionToEdit = value
        );
      this.taskDescriptionControl.setValue(this.descriptionToEdit)
    }
  }

  save(){
    if(!this.taskDescriptionControl.value || this.taskDescriptionControl.value === '') {
      return;
    }

    if(!this.descriptionToEdit){
      this.addTask();
    }
    else{
      this.updateTask();
    }
  }

  addTask(){
    let task = new TodoItem();
    task.description = this.taskDescriptionControl.value;
    task.isCompleted = false;
    this.add.emit(task);
    this.taskDescriptionControl.reset();
  }

  updateTask(){
    this.descriptionChangesSubscription.unsubscribe();
    this.taskDescriptionControl.reset();
    this.update.emit(this.descriptionToEdit);
  }
}

