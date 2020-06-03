import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss', '../app.component.scss']
})
export class TodoFooterComponent implements OnInit {
  
  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }

  countCompleted(): number {
    var c = 0;
    this.list.forEach(function(item) {
      if (item.isCompleted) c = c+1;
    })
    return c;
  }

  countNotCompleted(): number {
    var c = 0;
    this.list.forEach(function(item) {
      if (!item.isCompleted) c = c+1;
    })
    return c;
  }
}
