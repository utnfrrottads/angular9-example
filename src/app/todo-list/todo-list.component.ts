import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  
  @Input() list: TodoItem[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }

  hacerAlgo(){
    this.itemRemoved.emit();
  }

  borrarTarea(item: TodoItem){
    this.itemRemoved.emit(item);
    }

  cambiarEstado(item: TodoItem){
    this.itemStateChanged.emit(item);
    }
  }


