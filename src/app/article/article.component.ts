import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  @Input() title;
  @Input() description;
  @Input() date;
  @Input() asociatedTags;

  @Output() newTagSelected = new EventEmitter();

  //hacer el output
  ngOnInit(): void {}

  tagClicked(tag) {
    this.newTagSelected.emit(tag);
  }
  

}
