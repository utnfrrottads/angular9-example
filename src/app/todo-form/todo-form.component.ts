import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Input() selectedTask:TodoItem;
  @Output() add = new EventEmitter();
  taskGroup: FormGroup;

  constructor(private service:TodoService) {
    this.taskGroup = new FormGroup({
      description: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required,Validators.pattern(urlRegex)]),
      id: new FormControl('')
    })

  }
  ngOnChanges(){ 
    if (!this.selectedTask) {
      this.taskGroup.patchValue({
        description: '',
        url: '',
        id: ''
      })
    }
    else{
      this.taskGroup.patchValue({
        description: this.selectedTask.description,
        url: this.selectedTask.url,
        id: this.selectedTask.id
      })
      
    }    
  }
  save(){
    if(!this.taskGroup.controls.description.value || this.taskGroup.controls.description.value === '') {
      return;
    }
    if (this.taskGroup.controls.id.value) {
      let task = new TodoItem();
      task.description = this.taskGroup.controls.description.value;
      task.isCompleted = false;
      task.url = this.taskGroup.controls.url.value;
      task.id = this.taskGroup.controls.id.value;
      this.service.remove(task.id);
      this.add.emit(task);
      this.taskGroup.reset();
      console.log(this.taskGroup.controls.id.value)
    }
    else{
      let task = new TodoItem();
      task.description = this.taskGroup.controls.description.value;
      task.isCompleted = false;
      task.url = this.taskGroup.controls.url.value;
      this.add.emit(task);
      this.taskGroup.reset();
      console.log(this.selectedTask)
    }
    
  }


}

