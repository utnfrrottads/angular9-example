import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../model/article';
import { UserData } from '../model/user-data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[] = [];
  @Input() user: UserData;
  constructor(private service: ArticlesService) {}

  ngOnInit(): void {}

  onCommentSubmit(commentInput, articleSlug) {
    this.service
      .commentOnArticle({
        smug: articleSlug,
        commentBody: commentInput.value,
        token: this.user.token,
      })
      .subscribe();
  }
}
