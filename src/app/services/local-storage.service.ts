import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  localStorage = window.localStorage;
  
  constructor() { }

  loadList(){
    let list = JSON.parse(localStorage.getItem('list'));
    return list;
  }

  saveList(list){
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
