import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId = 0;
  item = new TodoItem();
  constructor() {}

  ngOnInit(): void {
    const ls = JSON.parse(localStorage.getItem('list'));
    this.list = ls ? ls.map((l) => new TodoItem(l)) : [];
    if (this.list.length > 0) {
      this.lastItemId = this.list[this.list.length - 1].id++;
    }
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  onTodoItemCreated = (item: TodoItem) => {
    const index = this.list.findIndex((elem) => elem.id === item.id);
    const localList = this.list;
    if (item.id && index !== -1) {
      const elem = this.list[index];
      elem.description = item.description;
      elem.icon = item.icon;
      localList.splice(index, 1, elem);
    } else {
      const newElem = new TodoItem(item);
      newElem.id = this.lastItemId + 1;
      localList.push(newElem);
    }
    this.lastItemId = this.lastItemId + 1;
    this.list = localList;
    this.item = new TodoItem();
    localStorage.setItem('list', JSON.stringify(this.list));
  };

  onTodoItemRemoved = (id) => {
    this.list = this.list.filter((elem) => elem.id !== id);
    localStorage.setItem('list', JSON.stringify(this.list));
  };

  onItemEdit = (elem) => {
    this.item = { ...elem };
  };
}
