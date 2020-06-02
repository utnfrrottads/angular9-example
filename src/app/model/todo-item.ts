export class ToDoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }


  static fromData({ id, description, isCompleted }) : ToDoItem{
    let toDoItem = new ToDoItem();
    toDoItem.id = id;
    toDoItem.description = description;
    toDoItem.isCompleted = isCompleted;

    return toDoItem;
  }

}
