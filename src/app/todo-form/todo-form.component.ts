import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{

  @Input() formMode='create'
  @Input() currentItem= new TodoItem();
  buttonText='';
  inputText='';
  @Input() method='';
  @Output() itemCreated = new EventEmitter();
  @Output() itemUpdated = new EventEmitter();

  ngOnInit(){
    switch (this.formMode) {
      case 'create':
        this.buttonText="Agregar Tarea";
        break;
      case 'update':
        this.buttonText="Guardar";
        break;
      default:
        throw new Error();
    }
  }

  saveItem(input){
    if(input.value!==''){
      input.classList.remove("wrong-input")

      switch (this.formMode) {
        case 'create':
          this.addItem(input);
          break;
        case 'update':
          this.updateItem(input);
          break;
        default:
          throw new Error();
      }

    }
    else{
      input.classList.add("wrong-input")
    }
  }

  addItem(input){
    this.currentItem = new TodoItem();
    this.currentItem.description = input.value;
    input.value="";
    this.itemCreated.emit(this.currentItem);
  }

  updateItem(input){
    this.currentItem.description=input.value;
    this.itemUpdated.emit(this.currentItem);
  }
}
