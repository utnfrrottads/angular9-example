import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormControl } from '@angular/forms';
import { tokenReference } from '@angular/compiler';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  token: any;
  article: any;
  slug: any;
  comments: any = [];
  comment: any;

  constructor(
    private aService: ArticlesService,
    private cService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //me traigo el slug
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.aService
      .getArticleBySlug(this.slug)
      .subscribe((res) => {
        this.article = res.article;
        this.comments = this.getComments(this.article);
      });
  }

  //FormControl
  commentControl = new FormControl('');

  //ABC comments

  //Alta
  setComment() {
    this.token = localStorage.getItem('token');
    this.comment = {
      comment: {
        body: this.commentControl.value,
      },
    };

    this.cService
      .setComment(this.comment, this.article.slug, this.token)
      .subscribe((res) => {
        this.commentControl.patchValue('');
        this.getComments(this.article);
      });
  }

  //Baja
  deleteComment(commentId) {
    this.token = localStorage.getItem('token');
    this.cService
      .deleteComment(commentId, this.article, this.token)
      .subscribe((res) => {
        this.getComments(this.article);
      });
  }

  //Consulta
  getComments(article) {
    this.cService.getComments(article).subscribe((response) => {
      this.comments = response.comments;
    });
  }
}
