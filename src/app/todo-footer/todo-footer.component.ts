import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list = [];
  completeTasks = 0;
  totalTasks = 0;

  updateStats() {
    this.totalTasks = this.list.length;

    this.completeTasks = 0;
    for( var i = 0; i < this.list.length; i++){ 
      if(this.list[i].isCompleted === true){
        this.completeTasks++;
      }
    }
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.updateStats();
  }


}
