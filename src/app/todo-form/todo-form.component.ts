import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss', '../app.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(inputControl) {
    this.add.emit(inputControl.value);
    inputControl.value = '';
  }
}
