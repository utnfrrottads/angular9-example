import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

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

  getArticlesByTag(tag){
    const url = this.baseUrl + 'articles' + '?tag=' + tag + '&limit=5';
    return this.http.get<any>(url);
  }

  logIn(){
    const url = this.baseUrl + 'users/login';
    let body = {
      "user":{
        "email": "aleee_76@live.com.ar",
        "password": "alejo-ttads"
      }
    };
    return this.http.post<any>(url,body);
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