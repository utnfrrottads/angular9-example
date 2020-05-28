import { Component, OnInit } from '@angular/core';
import {ToDoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent{
  taskList : ToDoItem[] = [];
  

  onNewTaskAdded(newTask : ToDoItem){
    this.taskList.push(newTask);
  }

  onToggleCompleted(task : ToDoItem){
    task.toggleCompleted();
  }

  onRemoveTask(task : ToDoItem){
    this.taskList = this.taskList.filter(taskItem => taskItem !== task);
  }
}
