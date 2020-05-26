import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter();
  taskName: string;
  taskStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    if (this.taskName != null && this.taskName.length > 0) {
      this.add.emit(new TodoItem(0, this.taskName, this.taskStatus));
      this.taskName = '';
    }
  }
}
