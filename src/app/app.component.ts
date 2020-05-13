import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-peti';
  counterValue = 0;
  onCountChanged(event) {
    this.counterValue = event;
  }
  onSecondCounterNumberClicked(event) {
    this.counterValue = 0;
  }
  onThirdCounterNumberClicked(event) {
    this.counterValue = this.counterValue - 1;
  }
}
