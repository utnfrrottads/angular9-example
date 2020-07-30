import { Component, Input } from '@angular/core';

import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  @Input() list : TodoItem[] = [];

  Completeditems(){
    return this.list.filter(each => each.isCompleted === true).length;
  }
  
  UnCompleteditems(){
    // return this.list.filter(each => each.isCompleted === true).length;
    // Other form:
    return this.list.length - this.Completeditems() 
  }

}
