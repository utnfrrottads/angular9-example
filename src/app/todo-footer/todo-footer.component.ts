import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  
  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

  completedTasksRatio() {
    let count = 0;
    this.list.forEach(item => {
      if (item.isCompleted) { count += 1; }
    });
    return `${count} out of ${this.list.length}`;
  }

}
