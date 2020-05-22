export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean;

  constructor(params: Partial<TodoItem>) {
    this.id = params.id;
    this.description = params.description;
    this.isCompleted = params.isCompleted || false;
  }
}
