export class Task {
  id: number;
  description: string;
  isCompleted: boolean = false;
  startedDate : Date;
  completedDate : Date;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }


  static fromData({ id, description, isCompleted, startedDate, completedDate }) : Task{
    let task = new Task();
    task.id = Number(id);
    task.description = description;
    task.isCompleted = isCompleted === "true";
    task.startedDate = new Date(startedDate);
    task.completedDate = new Date(completedDate);

    return task;
  }

}
