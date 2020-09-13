import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly articleKey = 'article';
  article: Article;

  constructor(
    private storage: LocalStorageService
  ) { }

  setArticle(article: Article){
    this.article = article;
    this.storage.set(this.articleKey, article);
  }

  getArticle(){
    if(!this.article){
      this.article = this.storage.get(this.articleKey);
    }
    return this.article;
  }
}
