import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() itemStateChanged = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminarTarea(id){
    this.itemRemoved.emit(id);
  }
  cambiarEstado(id){
    this.itemStateChanged.emit(id);
  }

}
