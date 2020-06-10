import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { element } from 'protractor';
import { TodoService } from '../todo.service';
import { LocalStorageService } from '../local-storage.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  constructor(
    private service: TodoService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    
    let oldList = this.storage.getList();
    if (oldList === null) {
      console.log("NO hay lista previa.");
    }
    else{
      this.service.updateList(oldList);
    }
  }

  getList() {
    return this.service.list;
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  onItemStateChanged(item: TodoItem) {
    this.service.toggleCompleted(item);
  }
  onTodoItemCreated(task) {
    this.service.add(task);
  }
}
