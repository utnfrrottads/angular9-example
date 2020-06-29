import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: any[];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  removeItem(index: number) {
    this.itemRemoved.emit(index);
  }

  completeTask(item:TodoItem) {
    this.itemStateChanged.emit(item);
  }
}
