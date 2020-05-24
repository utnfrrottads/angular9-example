import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  @Input() list: TodoItem[] = [];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  @Output() itemUpdated = new EventEmitter();
  editionModeEnabledTo: Number;
  imagesURL="../../../images/";
  imagesList=["cart.png","heart.png","light_bulb.png","like.png","text.png"];
  selectedImage='';

  toggleCompleted(item: TodoItem){
    this.itemStateChanged.emit(item);
  }

  deleteTodoItem(item: TodoItem){
    this.itemRemoved.emit(item);
  }

  updateTodoItem(item: TodoItem){
    this.toggleEdition(item);
    this.itemUpdated.emit(item);
  }

  toggleEdition(item: TodoItem){
    if(item.id===this.editionModeEnabledTo){
      this.editionModeEnabledTo=undefined;
    }
    else{
      this.editionModeEnabledTo=item.id;
    }
  }

  onImageChanged(imageChosen,item: TodoItem){
    item.imageURL=imageChosen.options[imageChosen.selectedIndex].value;
    this.itemUpdated.emit(item);
  }

}
