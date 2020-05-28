import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list = [];
  @Input() cantPendientes;
  @Input() cantCompletadas;

  constructor() { }

  ngOnInit(): void {
  }
 
}
