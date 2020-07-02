import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() list: any[];
  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }
  completedPercentage() {    
    this.list = this.service.list;
    if(this.list && this.list !== undefined){ 
      const completed = this.list.filter(item => item.isCompleted).length * 100;
      const percenter = this.list.length;
      return Math.round(completed / percenter);
    }    
    return 0;

  }
}
