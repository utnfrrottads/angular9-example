import { Task } from '../../model/task';
import { LocalstorageService } from './../localstorage/localstorage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  taskList : Task[];
  nextTaskId : number;
  
  constructor(private localStorageService : LocalstorageService){
    this.taskList = localStorageService.retrieve("taskList") || [];
    this.nextTaskId = localStorageService.retrieve("nextTaskId") || 1;

    for (let i = 0; i < this.taskList.length; i++){
      this.taskList[i] = Task.fromData(this.taskList[i]); 
    }
  }

  getList(){
    return this.taskList;
  }

  getNextId(){
    return this.nextTaskId;
  }

  persistList(){
    this.localStorageService.persist("taskList", this.taskList);
    this.localStorageService.persist("nextTaskId", this.nextTaskId);
  }


  addTask(description : string){
    let newTask = new Task();
    newTask.id = this.nextTaskId;
    newTask.description = description;
    newTask.startedDate = new Date();

    this.taskList.push(newTask);
    this.nextTaskId++;
  }

  removeTask(task : Task) {
    this.taskList = this.taskList.filter(taskItem => taskItem !== task);
  }

  editTask(newDescription : string, editedTaskId : number){
    let editedTask = this.taskList.find(task => task.id === editedTaskId);
    editedTask.description = newDescription;
  }

  toggleCompleted(task : Task) {
    task.toggleCompleted();

    if (task.isCompleted) {
      task.completedDate = new Date();
    }
    else{
      task.startedDate = new Date();
      task.completedDate = undefined;
    }
  }

  countCompletedTasks() : number{
    let completedTasks = 0;

    for (let task of this.taskList) {
      if (task.isCompleted) {
        completedTasks++;
      }
    }

    return completedTasks;
  }

  calculateAverageTimeToCompleteTask() : string{
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
      return (totalTime / completedTasksCounter / 1000).toFixed(2); 
    } 
    else{
      return "";
    } 
  }

}
