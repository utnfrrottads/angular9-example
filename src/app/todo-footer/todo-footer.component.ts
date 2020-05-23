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
    return this.list.length - this.getCountCompleted();
  }

  getMeanTime(){
    let completedItems = this.list.filter(item=>item.isCompleted);
    //no funciona reduce()

    //let time = completedItems.reduce(
    //  (accum, item) => {
    //     return accum + item.getCompletedTime()  //se acumula tiempo en milisegundos
    //  },0);
    
    let time=10000;
    let result;
    if(completedItems.length!=0){
      result=time/1000/completedItems.length;
      result=result.toFixed(2);
    }
    else{
      result='-';
    }
    return result;
  }
}
