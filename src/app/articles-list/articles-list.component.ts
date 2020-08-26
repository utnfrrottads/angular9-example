import { Component, OnInit, Input } from '@angular/core';
import { MultipleArticles, Article } from '../model/article';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles: Article[];

  constructor(
    private router: Router,
    private articleService: ArticleService
    ) { }

  ngOnInit(): void {

  }

  goToArticlePage(article: Article){
    this.articleService.setArticle(article);
    this.router.navigate(['article']);
  }

}
