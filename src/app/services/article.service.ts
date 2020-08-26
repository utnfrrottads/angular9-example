import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: Article;

  constructor() { }

  setArticle(article: Article){
    this.article = article;
  }

  getArticle(){
    return this.article;
  }
}
