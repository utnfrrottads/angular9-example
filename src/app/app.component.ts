import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 list = [];

 add(inputControl) {
   if (inputControl.value === '') {
     return;
   }
   this.list.push(
     {
       description: inputControl.value,
      completed: false
    });
   inputControl.value = '';
 }
 remove(item) {
   const index = this.list.findIndex(each => each.description === item.description);
   this.list.splice(index, 1);
 }
 toggle(item) {
   item.completed = !item.completed
 }
}

