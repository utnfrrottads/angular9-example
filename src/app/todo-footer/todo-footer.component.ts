import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  countTodo = 0;
  countCompleted = 0;
  @Input() list;
  constructor() { }

  ngOnInit() {

  }
  incompletedSize() {
    this.countTodo = this.list.filter(item => item.isCompleted === false).length;
    return this.countTodo;
  }
  completedSize() {
    this.countCompleted = this.list.filter(item => item.isCompleted === true).length ;
    return this.countCompleted;
  }

}
