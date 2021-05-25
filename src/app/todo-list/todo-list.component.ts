import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Output() itemRemoved = new EventEmitter<any>();
  @Output() itemStateChanged = new EventEmitter<any>();
  @Input() list = [];

  constructor() { }

  ngOnInit(): void {
  }

  onItemRemoved(item: any){
    this.itemRemoved.emit(item);
  }

  toggle(item: any){
    this.itemStateChanged.emit(item);
  }


}
