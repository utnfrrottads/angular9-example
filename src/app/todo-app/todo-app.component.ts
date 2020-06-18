import { TaskListService } from './../services/task-list/task-list.service';
import { Component, OnInit, OnDestroy, HostListener, OnChanges } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit, OnDestroy{
  taskList : Task[];
  averageTimeToCompleteTask : string;

  constructor(public taskListService : TaskListService){
  }

  ngOnInit() {
    this.taskList = this.taskListService.getList();
    this.averageTimeToCompleteTask = this.taskListService.calculateAverageTimeToCompleteTask();
  }

  ngOnDestroy() {
    this.taskListService.persistList();
  }
  
  // No funciona
  /* 
  @HostListener('window:beforeunload')
  public beforeunloadHandler($event) {
    this.persistList();
  }
  */

  onNewTaskAdded(){
    this.taskList = this.taskListService.getList();
    this.taskListService.persistList();
  }

  onRemovedTask(){
    this.taskList = this.taskListService.getList();
    this.averageTimeToCompleteTask = this.taskListService.calculateAverageTimeToCompleteTask();
    this.taskListService.persistList();
  }

  onToggleCompleteTask(){
    this.averageTimeToCompleteTask = this.taskListService.calculateAverageTimeToCompleteTask();
    this.taskListService.persistList();
  }

  onEditedTask(){
    this.taskList = this.taskListService.getList();
    this.taskListService.persistList();
  }
}
