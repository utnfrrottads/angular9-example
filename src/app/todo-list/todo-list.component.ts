import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  array = [];
  @Input() list: any[];
  @Input() lsList: any[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  @Output() lsItemRemoved = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeItem(id) {
    this.itemRemoved.emit(id);
  }

  lsRemoveItem(id){
    this.lsItemRemoved.emit(id);
  }

  completeTask(item:TodoItem) {
    this.itemStateChanged.emit(item);

  }

}