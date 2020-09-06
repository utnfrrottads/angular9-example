import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';
import { HttpService } from '../services/http.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: Article;
  currentUser: User;

  constructor(
    private articleService: ArticleService,
    private http: HttpService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle();
    this.http.getCurrentUser().subscribe(response => this.currentUser = response.user);
  }

  updateArticle(){
    this.router.navigate(['editor/update']);
  }

  deleteArticle(){
    this.http.deleteArticle(this.article);
  }

}
