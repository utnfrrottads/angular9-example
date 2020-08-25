export class TodoItem {
  id: number;
  description: string;
  url: string;
  isCompleted = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
