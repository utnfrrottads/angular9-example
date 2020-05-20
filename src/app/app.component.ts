import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-peti';
  languages = [];
  isDestroyed = false;

  changeLanguages() {
    this.languages = ['Javascript', 'Typescript', 'Java', 'Python', 'C#', 'Smalltalk', 'Pascal', 'Haskell', 'Lisp'];
  }

  destroy() {
    this.isDestroyed = true;
  }
}
