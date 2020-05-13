import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count = 100;
  @Output() countChanged = new EventEmitter<number>();
  @Output() numberClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count = this.count + 1;
    this.countChanged.emit(this.count);
  }
  onNumberClicked() {
    this.numberClicked.emit(this.count);
  }
}
