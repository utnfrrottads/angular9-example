import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: any = [];
  tags: any = [];
  constructor(private service: ArticlesService) { this.loadTags(); }

  ngOnInit(): void { }

  loadArticles() {
    this.service.getArticles().subscribe((response) => {
      this.articles = response.articles;
    });
  }

  loadNArticlesForTag(tag: any, quantity: number) {
    this.service.getArticlesByTag(tag).subscribe((response) => {
      this.articles = response.articles.slice(0, quantity);
    });
  }

  loadTags() {
    this.service.getTags().subscribe((response) => {
      this.tags = response.tags;
    });
  }
  
  createNewComment(text: string, endpoint: string) {
    this.service.postNewComment(text, endpoint); 
  }
}
