import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  array = [];
  @Input() lsList: any[];
  @Output() lsItemRemoved = new EventEmitter();
  @Output() lsItemChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  lsRemoveItem(id){
    this.lsItemRemoved.emit(id);
  }
  lsCompleteTask(task: TodoItem){
    this.lsItemChanged.emit(task);
  }

}