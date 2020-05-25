import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { Strategy } from '../model/strategy';
import { CreateStrategy } from '../model/create-strategy';
import { UpdateStrategy } from '../model/update-strategy';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{

  @Input() formMode='create'
  @Input() currentItem= new TodoItem();
  @Output() itemSaved = new EventEmitter();
  strategy: Strategy;

  ngOnInit(){
    switch (this.formMode) {
      case 'create':
        this.strategy= new CreateStrategy(this.currentItem);
        break;
      case 'update':
        this.strategy= new UpdateStrategy(this.currentItem);
        break;
      default:
        throw new Error();
    }
  }

  saveItem(input){
    if(input.value!==''){
      input.classList.remove("wrong-input")
      this.strategy.saveItem(input)
      this.itemSaved.emit(this.currentItem);
    }
    else{
      input.classList.add("wrong-input")
    }
  }

}
