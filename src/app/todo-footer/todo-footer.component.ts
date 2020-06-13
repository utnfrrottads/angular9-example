import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  @Input() list: TodoItem[];

  constructor(
    private todoService: TodoService
  ) {}

  getCompletedItems(){
    let completedItems = this.todoService.getCompletedItems();
    return(completedItems);
  }

  getPendingItems(){
    let pendingItems = this.todoService.getPendingItems();
    return(pendingItems);
  }
}
