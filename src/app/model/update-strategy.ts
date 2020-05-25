import { Strategy } from './strategy';
import { TodoItem } from './todo-item';

export class UpdateStrategy extends Strategy {

    constructor(item: TodoItem){
        super(item);
        this.buttonText='Guardar';
        this.inputText=item.description;
    }

    saveItem(input){
        this.currentItem.description=input.value;
    }
}