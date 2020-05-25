import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { TodoItem } from "../model/todo-item";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.scss"],
})
export class TodoFooterComponent implements OnInit {
  @Input() list: TodoItem[] = [];
  constructor() {}
  getTotalCompleted() {
    return this.list.reduce(
      (acum, item) => (item.isCompleted ? acum + 1 : acum),
      0
    );
  }
  getTotalPending() {
    return this.list.length - this.getTotalCompleted();
  }
  ngOnInit(): void {}
}
