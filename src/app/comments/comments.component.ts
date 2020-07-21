import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
@Input() article;

  constructor(
    private service: ArticlesService
  ) { }

  ngOnInit(): void {
  }

  insertComment(Comment){
    const value = Comment.value;
    
    Comment.value = '';
    Comment.focus();
  }
}
