import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() id = 0;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onTodoItemCreating(input){    
    if(input.value === ''){
      return;
    }
    this.id = this.id + 1;
    this.add.emit(input);
  }

}
