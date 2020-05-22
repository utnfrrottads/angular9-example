export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean;
  dateTimeCreation: Date;
  dateTimeCompleted: Date;

  constructor(){
    this.isCompleted=false;
    this.dateTimeCreation=new Date();
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
