import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent{

  @Input() list: TodoItem[] = [];

  getCountCompleted(){
    return this.list.filter(item=>item.isCompleted).length
  }

  getCountIncompleted(){
    return this.list.length - this.getCountCompleted();
  }
}
