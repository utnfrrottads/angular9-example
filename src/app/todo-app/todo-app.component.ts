import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { element } from 'protractor';
import { TodoService } from '../todo.service';
/** */
@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent {
  editingTask = undefined;
  isEditingTask = false;

  constructor(private service: TodoService) {}

  getList() {
    return this.service.list;
  }
  onTodoItemRemoved(id) {
    this.service.remove(id);
  }
  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }
  onTodoItemCreated(task) {
    this.service.add(task);
  }
  onItemEditing(task){
    this.editingTask = task;
    this.isEditingTask = true;
  }
  onCancelEditingTask(){
    this.isEditingTask = false;
  }

}
