import { TodoItem } from './todo-item';

export abstract class Strategy {
    buttonText: string;
    inputText: string;
    currentItem:TodoItem;

    constructor(item: TodoItem){
        this.currentItem=item;
    }
    
    abstract saveItem(input);
}
