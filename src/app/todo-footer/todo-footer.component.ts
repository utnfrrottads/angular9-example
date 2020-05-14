import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from "../model/todo-item"

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list: Array<TodoItem> = [];
  tareasCompletas = 0;
  tareasPendientes = 0;


  constructor() { }

  ngOnInit(): void {
  }

  calculaPendientes(list) {
    return this.tareasPendientes = this.list.filter(e => !e.isCompleted).length;
  }
  calculaCompletas(list){
    return this.tareasCompletas = this.list.filter(e => e.isCompleted).length;
  }



}
