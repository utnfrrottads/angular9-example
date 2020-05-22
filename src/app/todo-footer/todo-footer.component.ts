import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() list = [];
  
  constructor() { }

  ngOnInit(): void {
    
  }


    itemsCompletados(){
      console.log(this.list);
      let arrayItemsCompletos = this.list.filter(item => item.completado === true);
      return Object.keys(arrayItemsCompletos).length;   //buscado de internet porque no funcionaba el reduce()
    };

    itemsIncompletos(){
      let arrayItemsIncompletos = this.list.filter(item => item.completado === false);
      return Object.keys(arrayItemsIncompletos).length; 

    };
  
}
