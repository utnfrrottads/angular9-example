import { Component, OnInit , Input, Output,EventEmitter, TRANSLATIONS} from '@angular/core';
import { TodoItem } from '../model/todo-item'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];
  @Output() itemStateChanged = new EventEmitter(); 
  @Output() itemRemoved = new EventEmitter<number>();
  //@Output() itemRemoved = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  // changedState(item: TodoItem){
  //   item.isCompleted= !item.isCompleted;
  // }
  // deleteItem(item: TodoItem){
  //   this.list.splice(item.id,1);
  // }
  
  deleteItem(item: number){ 
    this.itemRemoved.emit(item);
  }

  changedState(item: TodoItem){
    this.itemStateChanged.emit(item);
  }
  
}
