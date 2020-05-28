import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();

  ngOnInit(): void {
  }

  changeState(item: TodoItem){
    this.itemStateChanged.emit(item)
  }

  deleteItem(item: TodoItem){
    this.itemRemoved.emit(item)
  }

}
