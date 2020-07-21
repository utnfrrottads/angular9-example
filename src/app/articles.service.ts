import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  limit : number = 5;
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) { }
  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  getArticlesOfTags(tagName){
    const url = this.baseUrl + 'articles/?limit='+this.limit+'&tag='+tagName;
    return this.http.get<any>(url);
  }
}
