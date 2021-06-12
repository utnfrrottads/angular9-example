import { TodoItem } from './../model/todo-item';
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent{

  @Output() add = new EventEmitter();

  item: TodoItem;


  constructor() { 
    this.item = new TodoItem();
  };

  addTask() {
    if ( !this.item.description ) {
      return;
    };
    this.add.emit( this.item );
    this.item = new TodoItem();
  };

}
