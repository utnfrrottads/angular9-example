import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() add = new EventEmitter();
  todoItem;

  addTask(task){    
    if(task.value !== ''){
      this.todoItem = new TodoItem();
      this.todoItem.description = task.value;
      this.add.emit(this.todoItem);
      task.value = '';
    } 
  }
  ngOnInit(): void {
  }

}
