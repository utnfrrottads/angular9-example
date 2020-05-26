import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input() list: any[];
  @Output() itemStateChanged = new EventEmitter();
  @Output() itemRemoved = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(item: TodoItem){
    this.itemStateChanged.emit(item);
  }

  removerItem(item) {
    this.itemRemoved.emit(item);
  }

  ngOnChanges() {
  }
}
