import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  {
  constructor(private service: ArticlesService) {}

  @Input() title;
  @Input() description;
  @Input() date;
  @Input() asociatedTags;
  @Input() slug;

  @Output() newTagSelected = new EventEmitter();
  state = "precommenting";

  commentValue = '';

  tagClicked(tag) {
    this.newTagSelected.emit(tag);
  }

  changeState(state) {
    this.state = state;
  }
  sendComment(text) {
    this.service.sendComment(text,this.slug);
  }
}
