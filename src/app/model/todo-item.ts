export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  constructor(object){
    this.id = object.id || '';
    this.description = object.description || '';
    this.isCompleted = object.isCompleted || '';
  }
}
