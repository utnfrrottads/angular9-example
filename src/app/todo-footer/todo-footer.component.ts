import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit, OnChanges {

  @Input() list: TodoItem[];
  pendientes = 0;
  completadas = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.completadas = this.list.filter(x => x.isCompleted).length;
    this.pendientes = this.list.filter(x => !x.isCompleted).length;
  }

}
