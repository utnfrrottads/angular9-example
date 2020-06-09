import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() list;
  secondList = [];
  constructor() { }

  ngOnInit(): void {
    this.list = ['Javascript', 'Typescript', 'Java', 'Python', 'C#'];
  }

  ngOnChanges() {
    console.log('On changes');
    this.secondList = this.list.filter(each => each.startsWith('J'));
  }

  ngOnDestroy() {
    console.log('Destroy');
  }
}
