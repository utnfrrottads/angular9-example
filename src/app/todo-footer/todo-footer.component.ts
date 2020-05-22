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
    let i=0;
    this.list.forEach(it => {
      if(it.isCompleted){
        i++;
      }
    });
    return i
  }

  getCountIncompleted(){
    return this.list.length-this.getCountCompleted();
  }

  getMeanTime(){
    let time=0;
    let itemCompletedCount=0;
    this.list.forEach(it => {
      if(it.isCompleted){
        time+=it.dateTimeCompleted.getMilliseconds() - it.dateTimeCreation.getMilliseconds();
        itemCompletedCount++;
      }
    });
    let result;
    if(itemCompletedCount!=0){
      let result=time/1000/itemCompletedCount;
    }
    else{
      let result=' - ';
    }
    return result;
  }
}
