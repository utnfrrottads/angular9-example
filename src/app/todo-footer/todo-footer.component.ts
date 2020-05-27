import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from "../model/todo-item"

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent  {

  @Input() list: Array<TodoItem> = [];
  tareasCompletas = 0;
  tareasPendientes = 0;


  calculaPendientes(list) {
    return this.list.filter(e => !e.isCompleted).length;
  }
  calculaCompletas(list){
    return this.list.filter(e => e.isCompleted).length;
  }



}
