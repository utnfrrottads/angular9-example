import { Component, Input, Inject, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})

export class TodoAppComponent implements OnInit{
  
  @Input() tema='';

  list: TodoItem[] = [];
  nextItemId = 0;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService){

  }

  ngOnInit(){

    this.nextItemId=this.storage.get(this.tema + "CantMax");
    if(this.nextItemId===undefined){
      this.nextItemId=0
      this.storage.set(this.tema + "CantMax",this.nextItemId);
    }
    
    for (let i=0; i < this.nextItemId; i++) {
      let item: TodoItem =  this.storage.get(this.tema + i.toString());
      if(item!==undefined){
        this.list.push(TodoItem.createTodoItem(item));
      }
    }

  }

  onTodoItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    this.storage.set(this.tema + item.id.toString(),item);
  }

  onTodoItemRemoved(item: TodoItem){
    this.storage.remove(this.tema + item.id.toString());
    let index=this.list.findIndex(i=>i.id===item.id);
    this.list.splice(index,1);
  }

  onTodoItemCreated(item: TodoItem){
    item.id=this.nextItemId;
    this.storage.set(this.tema + item.id.toString(),item);
    this.list.push(item);
    this.nextItemId++;
    this.storage.set(this.tema + "CantMax",this.nextItemId);
  }

  onTodoItemUpdated(item: TodoItem){
    this.storage.set(this.tema + item.id.toString(),item);
  }
}
