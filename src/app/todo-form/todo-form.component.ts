import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(input) {
    if (input.value.trim() !== '') {
      this.add.emit(input.value);
      input.value = '';
    }

  }


}
