import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { }
  
  add(task) {
    const id = this.lastItemId;
    task.id = id;

    //CARGO localStorage
    this.setItem(task.id,JSON.stringify(task));
    
    this.lastItemId += 1;
  }

  lsRemove(id){
    this.storage.removeItem(id);
  }
  
  lsIncompletedSize(){
    return this.getAll().filter(task => !task.isCompleted).length;
  }
  lsCompletedSize(){
    return this.getAll().filter(task => task.isCompleted).length;
  }

  setItem(key:string, value:string){
    this.storage.setItem(key,value);
  }
  getAll(){
   return this.storage.getLocalStorage();
  }
  lsOnItemStateChanged(task){
    this.setItem(task.id,JSON.stringify(task));
    
  }
}
