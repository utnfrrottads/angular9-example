import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent {

  constructor(
    private todoService: TodoService
  ) { }

  completedPercentage(){
    return Math.round(this.todoService.getCompletedItems() * 100 / this.todoService.list.length)
  }

}
