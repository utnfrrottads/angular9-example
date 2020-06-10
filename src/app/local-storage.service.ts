import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() { }
  getName() {
    return 'LocalStorageService'
  }
}
