import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';
import { HttpService } from '../services/http.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: Article;
  comments: Comment[];

  constructor(
    private articleService: ArticleService,
    private http: HttpService
    ) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle();
    this.updateComments();
  }

  updateComments(){
    this.http.getAllCommentsByArticle(this.article).subscribe(
      response => this.comments = response.comments
    );
  }

}
