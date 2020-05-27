import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];
  @Input() total = 0;
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onItemRemoved(item: TodoItem){
    this.itemRemoved.emit(item);
  }
  
  onItemStateChanged(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }

}
