import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  isEmpty = (value: any) => {
    return (value === undefined || value === null || value === "");
  }

  addTask(taskInput: any) {
    if (this.isEmpty(taskInput.value)) {
      return;
    }
    this.add.emit(taskInput.value);
    taskInput.value = "";
  }

}
