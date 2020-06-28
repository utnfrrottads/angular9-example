import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: any;
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(index: number){
    // const index = this.list.findIndex(each => { each === item; });
    this.itemRemoved.emit(index);
  }

  toggle(item: TodoItem){
    this.itemStateChanged.emit(item);
  }

}
