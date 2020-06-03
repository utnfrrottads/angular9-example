export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  constructor(id: number, description:string){
    this.id = id;
    this.description = description;
  }
  
  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
