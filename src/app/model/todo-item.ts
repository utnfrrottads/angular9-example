export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  isCompletedToString(){
    if(this.isCompleted){
      return "Completada";
    }else{
      return "Pendiente";
    }
  }
  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
