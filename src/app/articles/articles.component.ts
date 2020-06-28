import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../model/article';
import { UserData } from '../model/user-data';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[] = [];
  @Input() user: UserData;

  constructor(private service: ArticlesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  onCommentSubmit(commentInput, articleSlug) {
    this.service
      .commentOnArticle({
        smug: articleSlug,
        commentBody: commentInput.value,
        token: this.user.token,
      })
      .subscribe((response) => {
        this.dialog.open(CommentDialogComponent, {
          data: {
            comment: response.comment.body,
          },
        });
        commentInput.value = '';
      });
  }
}
