import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  //JSON

  constructor() { }

  getItem(){
    return localStorage.getItem('lista');
  }

  updateLocalStorage(lista){
    localStorage.setItem('lista',JSON.stringify(lista));
  }

  removeItem(id){
    var lista = JSON.parse(localStorage.getItem('lista'));

    lista.forEach(elemento => {      
      if(elemento.id === id){
        lista.splice(lista.indexOf(elemento),1); // Con este método elimino el primer elemento cuya clave sea id 
      }
  
      localStorage.setItem('lista',JSON.stringify(lista));  
    });

  }
}
