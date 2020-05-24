import { Component, OnInit, Input } from '@angular/core';

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

  countCompleted(){
    if(this.list){
      return this.list.filter(item => item.isCompleted).length;
    }

  }

  countPending(){
    if(this.list){
    return this.list.filter(item => !item.isCompleted).length;
    }

  }

}
