import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-adder',
  templateUrl: './arra-adder.component.html',
  styleUrls: ['./arra-adder.component.scss']
})
export class ArraAdderComponent  {

  coleccion:any = [1,2,3,4,5,6];

  agregarElemento() {
    this.coleccion.push('X');
  }

}
