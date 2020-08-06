export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;
  URL: string;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
