import { TaskListService } from './../services/task-list/task-list.service';
import { Task } from './../model/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  selectedTask : Task;

  @Input() taskList : Task[];

  @Output() toggleCompleted = new EventEmitter();
  @Output() removedTask = new EventEmitter();
  @Output() editedTask = new EventEmitter();


  constructor(public taskListService : TaskListService){
  }

  
  
  onToggleCompletedClick(task : Task){
    this.taskListService.toggleCompleted(task);
    this.toggleCompleted.emit();
  }
  
  onRemoveClick(task : Task){
    this.taskListService.removeTask(task);
    this.removedTask.emit();
  }

  onEditClick(task : Task){
    this.selectedTask = task;
  }

  onContentChanged(newDescription : string, editedTaskId : number){
    this.taskListService.editTask(newDescription, editedTaskId);
    this.selectedTask = undefined;
    this.editedTask.emit();
  }
}
