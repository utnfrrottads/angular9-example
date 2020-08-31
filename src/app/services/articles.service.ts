import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})

export class ArticlesService {
  actualArticle: any = {};
  readonly baseUrl = this.localStorageService.getBaseUrl();

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {}

  getArticles(page) {
    const url = this.baseUrl + 'articles?limit=10&offset=' + stringify(page*10);
    return this.http.get<any>(url);
  }

  deleteArticle(slug) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.localStorageService.getToken(),
      }),
    };
    const url = this.baseUrl + `articles/${slug}`
    return this.http.delete(url, httpOptions);
  }

  getArticleBySlug(slug) {
    const url = this.baseUrl + 'articles/' + slug;
    return this.http.get<any>(url);
  }

  postArticle(article) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.localStorageService.getToken(),
      }),
    };
    const url = this.baseUrl + 'articles';
    return this.http.post(url, article, httpOptions);
  }

  editArticle(article) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.localStorageService.getToken(),
      }),
    };
    const url = this.baseUrl + 'articles/' + article.slug;
    return this.http.put(url, article, httpOptions);
  }
}