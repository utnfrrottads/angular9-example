import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  @Input() list: TodoItem[];

  getCompletedItems(){
    let completedItems = this.list.filter(each => each.isCompleted);
    return(completedItems.length);
  }

  getPendingItems(){
    let pendingItems = this.list.filter(each => !each.isCompleted);
    return(pendingItems.length);
  }
}
