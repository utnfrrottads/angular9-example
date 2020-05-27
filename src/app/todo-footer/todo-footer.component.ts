import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  @Input() list = [];
  
  getCompletedTasks() {     
    return this.list.filter(t => t.isCompleted).length;   
  }  

  getPendingTasks()  {
    return this.list.filter(t => !t.isCompleted).length;   
  }


}
