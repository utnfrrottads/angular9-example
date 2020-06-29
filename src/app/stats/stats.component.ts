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

  notEmptyListCheck() {
    return (this.service.list.length > 0);
  }

  completedPercentage() {
    return Math.round(this.service.completedSize() / this.service.list.length * 100) || 0;
  }
}
