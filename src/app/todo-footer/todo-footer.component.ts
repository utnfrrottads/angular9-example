import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  // @Input() listChanged = [];
  @Input() completed: any;
  @Input() pending: any;

  constructor() {
   }
  

  ngOnInit(): void {
    
  }  
}
