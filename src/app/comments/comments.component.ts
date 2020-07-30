import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
@Input() slug: string;

  constructor(
    private service: ArticlesService
  ) { }

  insertComment(comment){
    this.service.insertComment(this.slug, comment.value)
    comment.value = '';
    comment.focus();
  }
}
