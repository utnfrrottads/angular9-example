import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {

  cant: number = 0;
  list: any[];
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {
    this.service.getList();

  }

  getList() {    
    this.list = this.service.list;
    return this.list;

  }

  onTodoItemRemoved(id) {
    var items = this.list.find(x => x.id === id);
    this.list.splice(items.id);    

  }
  onItemStateChanged(item: TodoItem) {    
    if (item.isCompleted) {
      item.isCompleted = false;
    } else {
      item.isCompleted = true;
    }    

  }
  onTodoItemCreated(task: TodoItem) {    
    let lastId = this.list.length;
    task.id = lastId;
    this.list.push(task);    
  }

  save() {    
    this.service.save(this.list);

  }

  clear() {
    this.service.clear();    
  }
}
