import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId = 1;
  cantPendientes = 0;
  cantCompletadas = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    this.actualizarTotales();
  }

  onTodoItemCreated(item: TodoItem ){
    item.id = this.lastItemId;
    this.lastItemId += 1;
    this.list.push(item);

    this.actualizarTotales();

  }

  onTodoItemRemoved(item: TodoItem){
    let index = this.list.indexOf(item);
    if (index>=0){
      this.list.splice(index,1);
    }
    this.actualizarTotales();
  }
  
  actualizarTotales(){
    this.cantCompletadas = 0;
    this.cantPendientes = 0;
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].isCompleted){
        this.cantCompletadas += 1;
      }
      else{
        this.cantPendientes += 1;
      }
    }
  }
}
