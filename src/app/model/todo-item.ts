export class TodoItem {
  id: number;
  description: string;
  isCompleted = false;

  constructor(id, description, isCompleted){
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
