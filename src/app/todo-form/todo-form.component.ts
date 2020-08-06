import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter();
  @Input() item : TodoItem;

  taskForm: FormGroup;


  constructor(){

    this.taskForm = new FormGroup({
    newTaskControl: new FormControl('',[Validators.required]),
    newUrlControl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })

  }

  onSubmit(){
  
    let task = new TodoItem();
    task.description = this.taskForm.get('newTaskControl').value;
    task.URL = this.taskForm.get('newUrlControl').value;
    task.isCompleted = false;
    this.add.emit(task);

    this.taskForm.reset();
    document.getElementById("button").textContent = "Create";

  }

  ngOnChanges(){
    if(this.item != null){
      document.getElementById("button").textContent = "Edit";
      this.taskForm.patchValue({
      newTaskControl : this.item.description,
      newUrlControl : this.item.URL,
    })
  }

  }

}


