import { Component, OnInit, OnDestroy, HostListener, OnChanges } from '@angular/core';
import { ToDoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit, OnDestroy{
  taskList : ToDoItem[];
  nextToDoItemId : number;
  averageTimeToCompleteTask : string;



  ngOnInit() {
    this.taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    this.nextToDoItemId = parseInt(JSON.parse(localStorage.getItem("lastToDoItemId"))) + 1 || 1;

    for (let i = 0; i < this.taskList.length; i++){
      this.taskList[i] = ToDoItem.fromData(this.taskList[i]); 
    }

    this.calculateAverageTimeToCompleteTask();
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


  calculateAverageTimeToCompleteTask(){
    let totalTime : number = 0;
    let completedTasksCounter = 0;
    for (let task of this.taskList){
      if(task.isCompleted){
        totalTime += task.completedDate.getTime() - task.startedDate.getTime();
        completedTasksCounter++;
      }
    }
    
    if(totalTime){
      // Tiempo en segundos
      this.averageTimeToCompleteTask = (totalTime / completedTasksCounter / 1000).toFixed(2); 
    } 
    else{
      this.averageTimeToCompleteTask = "";
    } 
  }

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

    if (task.isCompleted) {
      task.completedDate = new Date();
    }
    else{
      task.startedDate = new Date();
      task.completedDate = undefined;
    }

    this.calculateAverageTimeToCompleteTask();
    this.persistList();
  }

  onRemoveTask(task : ToDoItem) {
    this.taskList = this.taskList.filter(taskItem => taskItem !== task);
    this.calculateAverageTimeToCompleteTask();
    this.persistList();
  }

  onEditedTask(editedTask : ToDoItem){
    this.persistList();
  }
}
