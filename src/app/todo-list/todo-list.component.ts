import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TodoItem } from "../model/todo-item";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  @Input() list: TodoItem[] = [];
  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemStateChanged = new EventEmitter<TodoItem>();

  constructor() {}

  onToggleCompleted(item: TodoItem) {
    item.toggleCompleted();
    this.itemStateChanged.emit(item);
  }
  onRemove(item: TodoItem) {
    this.itemRemoved.emit(item);
  }
  ngOnInit(): void {}
}
