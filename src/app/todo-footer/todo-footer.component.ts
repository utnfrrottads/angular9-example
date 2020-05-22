import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent {
  @Input() list;

  constructor() {}

  getCompletedItems(): number {
    let completed = 0;
    this.list.forEach((item) => {
      if (item.isCompleted) {
        completed += 1;
      }
    });
    return completed;
  }
}
