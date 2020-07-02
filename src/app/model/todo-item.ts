export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;
  constructor(item) {
    this.id = item.id;
    this.description = item.description;
    this.isCompleted = item.isCompleted;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
