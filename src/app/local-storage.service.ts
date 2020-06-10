import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  storage = window.localStorage;

  constructor() {}
  getName() {
    return 'LocalStorageService';
  }

  updateList(list) {
    this.storage.setItem('list', JSON.stringify(list));
    console.log(this.storage.getItem('list'));
  }
  getList() {
    return JSON.parse(this.storage.getItem('list'));
  }
  clearData() {
    this.storage.clear();
  }
}
