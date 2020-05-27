import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewTarea(input){
    if(input.value === ''){
      return;
    }
    this.add.emit(input);
    input.value = '';
  }


}
