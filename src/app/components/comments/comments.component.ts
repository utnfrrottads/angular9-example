import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormControl, Validators } from '@angular/forms';

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
  commentControl = new FormControl('', [Validators.required]);

  constructor(
    private aService: ArticlesService,
    private cService: CommentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // si se quiere meter sin estar logeado, lo manda al Login.
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }

    // me traigo el slug
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = this.aService
      .getArticleBySlug(this.slug)
      .subscribe((res) => {
        this.article = res.article;
        this.comments = this.getComments(this.article);
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

      this.cService
        .setComment(this.comment, this.article.slug, this.token)
        .subscribe((res) => {
          this.commentControl.patchValue('');
          this.getComments(this.article);
        });
    }
  }

  deleteComment(commentId) {
    this.token = localStorage.getItem('token');
    this.cService
      .deleteComment(commentId, this.article, this.token)
      .subscribe((res) => {
        this.getComments(this.article);
      });
  }

  getComments(article) {
    this.cService.getComments(article).subscribe((response) => {
      this.comments = response.comments;
    });
  }

  canEdit(comment) {
    if (comment.author.username === localStorage.getItem('username')) {
      return true;
    }

    return false;
  }
}
