export class TodoItem {
  id: number;
  imageURL: string;
  description: string;
  isCompleted: boolean;
  dateTimeCreation: Date;
  dateTimeCompleted: Date;

  //porque al recuperar objeto del localStorage, no tiene los metodos, solo sus atributos
  static createTodoItem(item){
    let newItem= new TodoItem();
    newItem.id=item.id;
    newItem.description=item.description;
    newItem.isCompleted=item.isCompleted;
    newItem.dateTimeCreation=item.dateTimeCreation;
    newItem.dateTimeCompleted=item.dateTimeCompleted;
    newItem.imageURL=item.imageURL;
    return newItem;
  }

  constructor(){
    this.isCompleted=false;
    this.dateTimeCreation=new Date();
    this.imageURL="";
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    if(this.isCompleted){
      this.dateTimeCompleted=new Date();
    }
    else{
      this.dateTimeCompleted=undefined;
    }
  }

  getCompletedTime(){
    return this.dateTimeCompleted.getTime() - this.dateTimeCreation.getTime();
  }
}
