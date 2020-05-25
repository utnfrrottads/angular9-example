import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../model/todo-item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo-app.component.html",
  styleUrls: ["./todo-app.component.scss"],
})
export class TodoAppComponent implements OnInit {
  list = [];
  lastItemId = 0;
  constructor() {
    this.loadState();
  }
  loadState(): void {
    const savedList = localStorage.getItem("list");
    const savedLastItemId = localStorage.getItem("lastItemId");
    if (savedList !== null && savedLastItemId !== null) {
      this.list = JSON.parse(savedList);
      this.lastItemId = JSON.parse(savedLastItemId);
    }
  }
  saveState(): void {
    localStorage.setItem("list", JSON.stringify(this.list));
    localStorage.setItem("lastItemId", JSON.stringify(this.lastItemId));
  }
  ngOnInit(): void {}

  onTodoItemCreated(item: TodoItem) {
    item.id = this.lastItemId;
    this.lastItemId++;
    this.list.push(item);
    this.saveState();
  }

  onTodoItemRemoved(item: TodoItem) {
    this.list = this.list.filter((i) => i.id !== item.id);
    this.saveState();
  }

  onItemStateChanged(item: TodoItem) {
    this.list = this.list.map((i) => (i.id === item ? item : i));
    this.saveState();
  }
}
