import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  list = [];
  lastItemId = 0;
  IdIncrement = 1;
  constructor(private storage: LocalStorageService) {}

  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += this.IdIncrement;

    this.storage.updateList(this.list);
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);

    this.storage.updateList(this.list);
  }

  incompletedSize() {
    return this.list.filter((item) => !item.isCompleted).length;
  }
  completedSize() {
    return this.list.filter((item) => item.isCompleted).length;
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }

  toggleCompleted(item: TodoItem) {
    // tuve problemas con  el item.toggle que estaba antes porque
    // cuando devolvía el JSON me devolvía una lista de objetos
    // y no me detectaba que eran del tipo TodoItem.
    // así que metí el metodo toggle acá.
    // si se puede solucionar lo mencionado arriba desde local-storage-service
    // habría que utilizar la siguiente linea:
    //item.toggleCompleted()

    item.isCompleted = !item.isCompleted;

    this.storage.updateList(this.list);
  }

  updateList(list) {
    this.list = list;

    //obtengo el maximo ID.
    let maxID = 0;
    list.forEach((e) => {
      if (e.id >= maxID) {
        maxID = e.id;
      }
    });
    this.lastItemId = maxID + this.IdIncrement;
  }
}
