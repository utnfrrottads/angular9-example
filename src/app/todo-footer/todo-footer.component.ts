import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  countTodo = 0;
  countCompleted = 0;
  @Input() list;
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {

  }
  uncompletedTaskNumber() {
    this.countTodo = this.service.uncompletedTaskNumber()
    return this.countTodo;
  }
  completedTaskNumber() {
    this.countCompleted =this.service.completedTaskNumber()
    return this.countCompleted;
  }

}
