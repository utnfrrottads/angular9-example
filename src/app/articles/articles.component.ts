import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: any = [];
  tags: any = [];
  constructor(private service: ArticlesService) {this.loadTags()}

  ngOnInit(): void {}
  loadArticles() {
    this.service
      .getArticles()
      .subscribe((response) => (this.articles = response.articles));
  }
  loadTags() {
    this.service
      .getTags()
      .subscribe((response) => (this.tags = response.tags));
  }
  showArticlesForTag(tag){
    this.service
      .getArticlesByTag(tag)
      .subscribe( (response) => (this.articles = response.articles.slice(0, 5)));
  }
}
