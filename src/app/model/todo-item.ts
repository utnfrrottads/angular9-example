export class TodoItem {
  static idCounter: number = 0;

  id: number = 0;
  description: string;
  isCompleted: boolean = false;

  constructor(description){
    this.id = TodoItem.getIdCount();
    this.description = description;

    TodoItem.increaseIdCount()
  }

  static increaseIdCount() {
    this.idCounter += 1;
  }

  static getIdCount() {
    return this.idCounter;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

}

