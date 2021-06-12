import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  countTodo = 0;
  countCompleted = 0;
  @Input() list;
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {

  }
  lsIncompletedSize(){
    let inc = this.service.lsIncompletedSize()
    return inc;
  }
  lsCompletedSize(){
    let inc = this.service.lsCompletedSize()
    return inc;
  }


  setItem(key:string, value:string){
    this.service.setItem(key,value);
  }

}
