import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { TodoItem } from '../model/todo-item';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  localStorage = window.localStorage;

  getList(){
    let JSONList = JSON.parse(localStorage.getItem('list'));
    let list = [];
    let item;
    for(let index in JSONList){
      list.push(new TodoItem(JSONList[index]));
    }
    return list;
  }

  setList(list){
    try{
      localStorage.setItem('list', JSON.stringify(list));
    }
    catch(err){
      console.log(err);
    }
  }

  deleteList(){
    localStorage.removeItem('list');
  }
}
