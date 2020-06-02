import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  @Input() list = [];
  cantPending = 0;
  cantCompleted = 0;

  updateTotal(){
    this.cantCompleted = 0;
    this.cantPending = 0;
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].isCompleted){
        this.cantCompleted += 1;
      }
      else{
        this.cantPending += 1;
      }
    }
  } 
}
