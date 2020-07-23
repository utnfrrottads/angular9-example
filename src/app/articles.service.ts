import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';
  authenticationToken = null;

  constructor(private http: HttpClient) { }

  getArticlesByTag(tag:string) {
    const limit = 5;
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }
  
  getTags() {
    const url = `${this.baseUrl}tags`;
    return this.http.get<any>(url);
  }

  addCommentToArticle(slug: string, comment:string){
    const url = `${this.baseUrl}articles/${slug}/comments`;
    this.authenticate();
    const headers = {Authorization: 'Token '+this.authenticationToken}
    return this.http.post<any>(url,{comment:{body:comment}},{headers});
  }

  authenticate(){
    if(this.authenticationToken === null) {
      const url = `${this.baseUrl}users/login`;
      const email = 'user123@dominio.com';
      const password = 'mipassword';
      this.http.post<any>(url,{user:{email:email,password:password}}).subscribe(obj => this.authenticationToken = obj.user.token);
    }
  }
}
