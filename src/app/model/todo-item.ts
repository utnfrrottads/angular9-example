export class TodoItem {
  id: number;
  description: string;
  url: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
