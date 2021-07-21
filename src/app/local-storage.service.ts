import { TodoItem } from './model/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  constructor() { }
  
  saveListInLocalStorage( list: TodoItem[], lastItemId: number ) {
    localStorage.setItem( "list", JSON.stringify( list ) );
    localStorage.setItem( "lastItemId", JSON.stringify( lastItemId ) );
  }

  loadListFromLocalStorage() {
    let tasks: TodoItem[] = JSON.parse( localStorage.getItem( "list" ) );
    let lastItemId: number = JSON.parse( localStorage.getItem( "lastItemId" ) );
    if ( tasks === null ) {
      tasks = [];
      lastItemId = 0;
    }
    return { "list": tasks, "lastItemId": lastItemId };
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
