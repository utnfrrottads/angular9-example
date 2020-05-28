import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../model/todo-item';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(textoTarea: any){
    if (textoTarea.value!=""){
    var nuevaTarea = new TodoItem();
    nuevaTarea.description = textoTarea.value;
    textoTarea.value = "";
    this.add.emit(nuevaTarea);
    }
    
  }

}
