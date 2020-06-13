import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TodoItem {
  @Expose()
  id: number;
  @Expose()
  description: string;
  @Expose()
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
