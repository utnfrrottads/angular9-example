import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() list = [];
  
  itemsCompletados = 0;
  itemsIncompletos = 0;
  constructor() { }

  ngOnInit(): void {
    this.contarItems(this.list);
  }
  
    contarItems(list){
      for(var i = 0; i < list.length; i++){
        if(list[i].completado === true) 
          this.itemsCompletados = this.itemsCompletados + 1
        else this.itemsIncompletos = this.itemsIncompletos + 1;
      }
    }
}
