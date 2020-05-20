import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit { 
  
  @Input() list;
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  } 

  remove(item){    
    this.itemRemoved.emit(item);
  }

  stateChange(item){
    this.itemStateChanged.emit(item);
  }

}
