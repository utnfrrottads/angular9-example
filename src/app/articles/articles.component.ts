import { Component, OnInit, Injectable } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../entities/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = []
  tags: any = [];
  selectedTag = '';

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.loadTags();
  }

  loadArticlesByTag(tag: string) {
    this.selectedTag = tag;
    this.service.getArticlesByTag(tag).subscribe(response => this.articles = response.articles.map(art => Article.createArticle(art)));
  }

  loadTags() {
    this.service.getTags().subscribe(response => this.tags = response.tags);
  }

  addCommentToArticle(slug: string, comment: string){
    this.service.addCommentToArticle(slug, comment).subscribe(rdo => console.log(rdo));
  }
}
