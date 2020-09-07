export class TodoItem {
  id: number;
  description: string;
  url: string;
  mail: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
