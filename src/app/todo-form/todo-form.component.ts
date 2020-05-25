import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TodoItem } from "../model/todo-item";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  @Output() add = new EventEmitter<TodoItem>();
  public description: string = "";

  public onAdd() {
    const item = new TodoItem();
    item.description = this.description;
    this.add.emit(item);
    this.description = "";
  }
  constructor() {}

  ngOnInit(): void {}
}
