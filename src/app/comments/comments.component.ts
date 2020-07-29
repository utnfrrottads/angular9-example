import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
@Input() slug: string;
nombre;
  constructor(
    private service: ArticlesService
  ) { }

  ngOnInit(): void {
    
  }

  insertComment(comment){
    // const value = Comment.value;

    // Comment.value = this.article.slug;
    // Comment.value = this.service.insertComment(Comment.value);
    // Comment.focus();

    //this.service.insertComment(this.slug, comment.value).subscribe(response => comment.value = response.comment);
    // comment.value = this.slug;
    this.service.insertComment(this.slug, comment.value)
    //.subscribe(response => this.nombre = response.user);
    comment.focus();
  }
}
