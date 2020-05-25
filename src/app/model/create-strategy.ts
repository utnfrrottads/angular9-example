import { Strategy } from './strategy';
import { TodoItem } from './todo-item';

export class CreateStrategy extends Strategy {

    constructor(item: TodoItem){
        super(item);
        this.buttonText='Agregar Tarea';
        this.inputText='';
    }

    saveItem(input){
        this.currentItem.description = input.value;
        input.value="";
    }
}
