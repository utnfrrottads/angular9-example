import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle();
  }

}
