import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent{

  @Input() list;
  
  getCountDone(){
    let count = 0;
    this.list.forEach(element => {
      if (element.isCompleted) {count+=1}
    });
    return count;
  }
}
