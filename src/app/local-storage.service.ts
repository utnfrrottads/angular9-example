import { Injectable } from '@angular/core';
import {TodoItem} from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  storage = window.localStorage
  constructor() {
    
   }
  getName() {
    return 'LocalStorageService'
  }
  saveTask(tasks : TodoItem[]){
    this.storage.setItem('tareas',JSON.stringify(tasks))
  }
  loadTasks():string{
    return this.storage.getItem('tareas')
  }
}
