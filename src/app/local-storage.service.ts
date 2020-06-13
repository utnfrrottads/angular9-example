import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() {}

  updateStorage(todoItems: TodoItem[]): void {
    localStorage.setItem('todo-list', JSON.stringify(todoItems));
  }

  getItemsInStorage(): TodoItem[] {
    const storageTodoItems = JSON.parse(localStorage.getItem('todo-list'));

    if (storageTodoItems == null){
      return [];
    }

    return storageTodoItems.map((item) =>
    plainToClass(TodoItem, item)
  );
  }
}
