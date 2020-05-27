import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {
  @Input() ListItems = [];

  GetPendingTasks()  {
    return this.ListItems.filter(x => !x.isCompleted).length;
  }

  GetCompletedTasks() {
    return this.ListItems.filter(x => x.isCompleted).length;
  }  
}
