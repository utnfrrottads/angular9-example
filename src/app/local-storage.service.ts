import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

  store: Storage = localStorage;

  constructor() { }
  
  listInitialization() {
    let listDB       = JSON.parse(this.store.getItem('ng-tasks'));
    let lastItemIdDB = JSON.parse(this.store.getItem('ng-tasks-last-id'));
    if (listDB === undefined || listDB === null) {
        listDB = [];
        lastItemIdDB = 0;
    }
    return {list: listDB, lastItemId: lastItemIdDB};
  }

  listSave(list: any, lastId: number) {
    this.store.setItem("ng-tasks", JSON.stringify(list));
    this.store.setItem("ng-tasks-last-id", JSON.stringify(lastId));
  }

  listClear() {
    this.store.clear();
  }
}
