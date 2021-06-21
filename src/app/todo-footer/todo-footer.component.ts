import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  @Input() list: TodoItem[];

  constructor() {}

  ngOnInit(): void {}

  completed = () => {
    return this.list.reduce((acc, el) => (el.isCompleted ? ++acc : acc), 0);
  };

  pending = () => {
    return this.list.reduce((acc, el) => (!el.isCompleted ? ++acc : acc), 0);
  };

  average_time = () => {
    const completed = this.list.filter((elem) => elem.isCompleted);
    const totalTime = completed.reduce((acc, el) => {
      const diffTime = Math.abs(
        el.completedAt.getTime() - el.createdAt.getTime()
      );
      return acc + diffTime / (1000 * 60);
    }, 0);
    const resp = totalTime / completed.length;
    return resp ? resp.toFixed(2) : null;
  };
}
