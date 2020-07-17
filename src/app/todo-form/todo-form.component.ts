import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { TodoItem } from 'src/app/model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item){
    if (item.value === '') return;

    const newItem = new TodoItem(item.value);
    item.value = '';
    item.focus();
    this.add.emit(newItem);
  }
}
