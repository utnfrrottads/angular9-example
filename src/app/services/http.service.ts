import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleUser, User } from '../model/user';
import { MultipleArticles, Article } from '../model/article';
import { Author } from '../model/author';
import { MultipleComments } from '../model/comment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  getAllArticles(){
    const url = `${this.baseUrl}articles?limit=100`;
    return this.http.get<MultipleArticles>(url);
  }

  getMyArticles(){
    let author: Author; // request current user
    const url = `${this.baseUrl}articles?${author.username}`;
    return this.http.get<MultipleArticles>(url);
  }

  getArticlesByTag(tag:string) {
    const limit = 5;
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }
  
  getAllTags() {
    const url = `${this.baseUrl}tags`;
    return this.http.get<any>(url);
  }

  addCommentToArticle(slug: string, comment:string, callback){
    const url = `${this.baseUrl}articles/${slug}/comments`;
    this.authenticate(
      ({ user: {token} }) => {
        const headers = {Authorization: 'Token ' + token}
        this.http.post<any>(url,{comment:{body:comment}},{headers}).subscribe(callback);
      }
    );
    
  }

  getAllCommentsByArticle(article: Article){
    const url = `${this.baseUrl}articles/${article.slug}/comments`;
    return this.http.get<MultipleComments>(url);
  }

  authenticate(functionRequest){
    const url = `${this.baseUrl}users/login`;
    const email = 'user123@dominio.com';
    const password = 'mipassword';
    this.http.post<any>(url,{user:{email:email,password:password}}).subscribe(functionRequest);
  }

  getCurrentUser(){
    const url = this.baseUrl + 'user';
    this.http.get<SingleUser>(url);
  }

  registerUser(user: User){
    const url = `${this.baseUrl}users`;
    this.http.post<SingleUser>(url,{user}).subscribe(user => console.log(user));
  }

  logIn(user: User){
    const url = `${this.baseUrl}users/login`;
    let observable = this.http.post<SingleUser>(url,{user});
    observable.subscribe(response => this.storage.saveLogIn(response.user));
    return observable;
  }

  logOut(){
    this.storage.logOut();
  }
}
