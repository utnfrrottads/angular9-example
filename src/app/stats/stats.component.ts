import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  constructor(private service: TodoService) {}

  ngOnInit(): void {}
  completedPercentage() {
    return (
      Math.round(
        (this.service.completedSize() / this.service.getLocalList().length) * 100) || 0
    );
  }
  areThereTasks(){
    return (this.service.getLocalList().length > 0);
  }
}
