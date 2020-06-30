import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list = [];
  lastItemId=0;

  constructor(private storage: LocalStorageService) { 
    this.getItems();
    this.getLastId();
  }

  getLastId(){
    this.list.forEach(elemento =>{
      if(elemento.id > this.lastItemId)
      this.lastItemId = elemento.id + 1
    })
  }

  getItems(){
    var listaJSON = this.storage.getItem();
    this.list = JSON.parse(listaJSON)
    //aca tengo la lista
  }
  
  add(task) {
    task.id = this.lastItemId;

    this.list.push(task);
    this.lastItemId += 1;

    //objeto json - JSON.stringify(task.id,task.description,task.isCompleted)
    this.storage.actualizarLocalStorage(this.list);
  }

  update(task){
    //primero le cambio el estado
    task.isCompleted = !task.isCompleted;
    //despues cambio la task en la lista
    const index = this.list.findIndex((element) => element.id === task.id);
    this.list[index] = task;
    //guardo la lista nueva
    this.storage.actualizarLocalStorage(this.list);

    console.log(task)
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);

    this.storage.removeItem(id);
  }

  incompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;
  }
  completedSize() {
    return  this.list.filter(item => item.isCompleted).length ;
  }

}
