import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

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
  getArticlesByTag(tag: string){
    const url = this.baseUrl + `articles?tag=${tag}`;
    return this.http.get<any>(url);
  }
}
