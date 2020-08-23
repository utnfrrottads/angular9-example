export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;
  url: string;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
