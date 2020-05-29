import { ToDoItem } from './../model/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  @Input() taskList : ToDoItem[];
  @Output() toggleCompleted = new EventEmitter<ToDoItem>();
  @Output() removeTask = new EventEmitter<ToDoItem>();

  
  countCompletedTasks() : number{
    let completedTasks = 0;

    for (let task of this.taskList) {
      if (task.isCompleted) {
        completedTasks++;
      }
    }

    return completedTasks;
  }

  onToggleCompletedClick(task : ToDoItem){
    this.toggleCompleted.emit(task);
  }
  
  onRemoveClick(task : ToDoItem){
    this.removeTask.emit(task);
  }
}
