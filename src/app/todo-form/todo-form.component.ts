import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';

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

  addItem(input){
    let item = new TodoItem();
    item.description=input.value;
    item.isCompleted=false;
    input.value="";
    this.add.emit(item);
  }
}
