import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = this.localStorageService.getBaseUrl();

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) { }
  
  getArticles() {
    const url = this.baseUrl + 'articles';
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }

  getArticlesByTag(tag){
    const url = this.baseUrl + 'articles' + '?tag=' + tag + '&limit=5';
    return this.http.get<any>(url);
  }

  commentArticle(token:string, slug: string, comment: string){
    const url = this.baseUrl + 'articles/' + slug + '/comments';
    const completedToken = 'Token ' + token

    let body = {
      "comment": {
        "body": comment
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': completedToken
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
}
