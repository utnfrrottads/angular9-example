import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }
  completedPercentage() {
    const cant = this.service.list.length;
    const completed = this.service.completedSize();
    if(!cant && cant !== undefined){
      return Math.round(completed /  cant * 100);
    }    
    return 0;

  }
}
