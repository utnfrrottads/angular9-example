import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId = 0;
  
  

  constructor() { }

  ngOnInit(): void {

  }

  onItemStateChanged(item: any){
    item.completed = !item.completed
  }

  onTodoItemRemoved(item : any){
    const index = this.list.findIndex(each => each.desc === this.item.desc)
    this.list.splice(index,1);
  }

  onTodoItemCreated(description : string){

    this.lastItemId+=1;
    this.list.push({id: this.lastItemId , desc: description, completed: false});
    

  }



}
