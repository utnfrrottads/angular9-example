import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }

  onTodoItemRemoved(item){
    const index = this.list.findIndex(each => each ===item);
    this.list.splice(index, 1);
  }
  onItemStateChanged(item){
    item.completado = !item.completado;
  }
}
