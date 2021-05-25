import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() addst = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  add(inputControl: { value: string | String | undefined; }){

    if(inputControl.value === ''){
      return;
    }
    this.addst.emit(inputControl.value);
    inputControl.value = '';
  }

}
