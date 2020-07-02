import { Component, OnInit, Input } from '@angular/core';
// import { TodoItem } from '../model/todo-item';
// import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {  
  @Input() list: any = [];
  constructor( ) { }

  ngOnInit() {

  }
  incompletedSize() {
    if(this.list && this.list !== undefined){
      return this.list.filter(item => !item.isCompleted).length;
    } else {
      return 0;
    }
    
  }
  completedSize() {    
    if(this.list && this.list !== undefined){
      return this.list.filter(item => item.isCompleted).length;;
    }else {
      return 0;
    }    
  }

}
