export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
