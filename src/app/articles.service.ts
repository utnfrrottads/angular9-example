import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  user : any;
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
    const url = `${this.baseUrl}articles/?limit=${this.limit}&tag=${tagName}`;
    return this.http.get<any>(url);
  }

  authenticator(){
    const user = {"user":{"email": "ttadstestuser@gmail.com","password": "123456789"}};
    const UserUrl = `${this.baseUrl}users/login`;
    return this.http.post<any>(UserUrl, user);
  }

  insertComment(slug, comment){
    const url = `${this.baseUrl}articles/${slug}/comments`;
    const body = { "comment": { "body": comment } };

    this.authenticator().subscribe(response => { 
        this.user = response.user;
        const httpHeaders = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'Token '+this.user.token
          })
        };
        this.http.post(url, body, httpHeaders);
    });
  }
}


