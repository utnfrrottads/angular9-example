export class TodoItem {
  id: number;
  imageURL: string;
  description: string;
  isCompleted: boolean;
  dateTimeCreation: Date;
  dateTimeCompleted: Date;

  static createTodoItem(item){
    let newItem= new TodoItem();
    return Object.assign(newItem, item);
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
