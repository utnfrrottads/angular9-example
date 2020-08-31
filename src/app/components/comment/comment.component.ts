import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { CommentsService } from 'src/app/services/comments.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  token: any;
  article: any;
  slug: any;
  comments: any = [];
  comment: any;
  commentControl = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.articleService
      .getArticleBySlug(this.slug)
      .subscribe((res) => {
        this.article = res.article;
        this.comments = this.getComments(res.article.slug);
      });
  }

  setComment() {
    if (this.commentControl.value !== null) {
      this.token = localStorage.getItem('token');
      this.comment = {
        comment: {
          body: this.commentControl.value,
        },
      };

      this.commentService
        .setComment(this.comment, this.slug, this.token)
        .subscribe((res) => {
          this.commentControl.patchValue('');
          this.getComments(this.slug);
        });
    }
  }

  deleteComment(commentId) {
    this.token = localStorage.getItem('token');
    this.commentService
      .deleteComment(commentId, this.article.slug, this.token)
      .subscribe((res) => {
        this.getComments(this.slug);
      });
  }

  getComments(article) {
    this.commentService.getComments(article).subscribe((response) => {
      this.comments = response.comments;
    });
  }

  canEdit(comment) {
    if (comment.author.username === localStorage.getItem('username')) {
      return true;
    }
    else{
    return false;
    }
  }
}