import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ToDoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit, OnDestroy{
  taskList : ToDoItem[];
  nextToDoItemId : number;


  ngOnInit() {
    this.taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    this.nextToDoItemId = parseInt(JSON.parse(localStorage.getItem("lastToDoItemId"))) + 1 || 1;

    for (let i = 0; i < this.taskList.length; i++){
      this.taskList[i] = ToDoItem.fromData(this.taskList[i]); 
    }
  }

  ngOnDestroy() {
    this.persistList();
  }

  
  // No funciona así que debí persistir la lista cuando se añade, elimina o modifica una tarea 
  /* 
  @HostListener('window:beforeunload')
  public beforeunloadHandler($event) {
    this.persistList();
  }
  */


  persistList() {
    localStorage.setItem("taskList", JSON.stringify(this.taskList));

  }

  onNewTaskAdded(newTask : ToDoItem) {
    this.taskList.push(newTask);
    this.persistList();

    localStorage.setItem("lastToDoItemId", JSON.stringify(newTask.id));
  }

  onToggleCompleted(task : ToDoItem) {
    task.toggleCompleted();
    this.persistList();
  }

  onRemoveTask(task : ToDoItem) {
    this.taskList = this.taskList.filter(taskItem => taskItem !== task);
    this.persistList();
  }
}
