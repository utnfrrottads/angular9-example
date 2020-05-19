import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list: TodoItem[] = [];


  constructor() { }

  ngOnInit(): void {
  }

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
}
