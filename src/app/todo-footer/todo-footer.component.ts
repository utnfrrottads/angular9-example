import { Component, OnInit, Input } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }

  CountTask(){
    return this.list.length;
  }

  CountCompletedTask(){
      var count = 0;
      for(var i = 0; i < this.list.length; ++i){
          if(this.list[i].isCompleted)
              count++;
      }
      return count;
  }

}
