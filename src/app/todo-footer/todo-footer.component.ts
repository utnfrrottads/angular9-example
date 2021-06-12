import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent{

  @Input() list;

  counterCompletedTasks() {
    return this.list.filter( item => item.isCompleted === true ).length;
  };

  counterPendingTasks() {
    return this.list.filter( item => item.isCompleted === false ).length;
  };

}