export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;
  createdAt: Date;
  completedAt: Date;
  icon: string;

  constructor(elem?) {
    this.id = elem ? elem.id : null;
    this.description = elem ? elem.description : null;
    this.completedAt = elem ? new Date(elem.completedAt) : null;
    this.isCompleted = elem ? elem.isCompleted : false;
    this.createdAt = elem ? new Date(elem.createdAt) : new Date();
    this.icon = elem ? elem.icon : null;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    this.completedAt = this.isCompleted ? new Date() : null;
  }
}
