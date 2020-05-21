import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [{id: 0, descripcion: "1", completado: false}];
  lastItemId = 0;

  @Output() itemAgregadoFooter = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted(); 
  }

  onTodoItemCreated(inputControl){
    this.lastItemId = this.lastItemId + 1;
    this.list.push({id: this.lastItemId, descripcion: inputControl.value, completado: false});

  }


  onTodoItemRemoved(event){
    
  }
}
