import { Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges {

  taskControl = new FormGroup({
    description: new FormControl('',Validators.required), //mismo nombre que atributos de TodoItem
    url: new FormControl('',[
      Validators.required,
      Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    ])
  });

  saveButtonText='Create';
  descriptionChangesSubscription:Subscription = null;

  @Output() add = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() taskToEdit;

  ngOnChanges(){
    if(!this.taskToEdit){
      this.saveButtonText = 'Create';
    }
    else{
      this.saveButtonText = 'Update';
      this.descriptionChangesSubscription = this.taskControl.valueChanges.subscribe(
        value => this.taskToEdit = Object.assign(this.taskToEdit, value)
        );

      this.taskControl.patchValue({description: this.taskToEdit.description, url: this.taskToEdit.url})
    }
  }

  save(){
    if(!this.taskControl.value || this.taskControl.untouched) {
      return;
    }

    if(!this.taskToEdit){
      this.addTask();
    }
    else{
      this.updateTask();
    }
  }

  addTask(){
    let task = new TodoItem();
    task = Object.assign(task,this.taskControl.value);
    task.isCompleted = false;
    this.add.emit(task);
    this.taskControl.reset();
  }

  updateTask(){
    this.descriptionChangesSubscription.unsubscribe();
    this.taskControl.reset();
    this.update.emit(this.taskToEdit);
  }
}

