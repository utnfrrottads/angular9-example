import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() {}

  updateStorage(todoItems: TodoItem[]): void {
    localStorage.setItem('todo-list', JSON.stringify(todoItems));
  }

  getItemsInStorage(): TodoItem[] | null {
    return JSON.parse(localStorage.getItem('todo-list'));
  }
}
