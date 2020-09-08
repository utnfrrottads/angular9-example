import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleUser, User } from '../model/user';
import { MultipleArticles, Article } from '../model/article';
import { Author } from '../model/author';
import { MultipleComments, Comment } from '../model/comment';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  getAllArticles(page: number, limit:number){
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}articles?limit=${limit}&offset=${offset}`;
    return this.http.get<MultipleArticles>(url);
  }

  getMyArticles(){
    let author: Author; // request current user
    const url = `${this.baseUrl}articles?${author.username}`;
    return this.http.get<MultipleArticles>(url);
  }

  getArticlesByTag(tag:string) {
    const limit = 20;
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }
  
  getAllTags() {
    const url = `${this.baseUrl}tags`;
    return this.http.get<any>(url);
  }

  addCommentToArticle(article: Article, comment: Comment){
    const url = `${this.baseUrl}articles/${article.slug}/comments`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
    return this.http.post<any>(url, {comment}, {headers});
  }

  deleteComment(article: Article, comment: Comment){
    const url = `${this.baseUrl}articles/${article.slug}/comments/${comment.id}`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
    this.http.delete(url, {headers}).subscribe( response => {
      if(response.errors !== undefined){
        alert('Error when deleting comment');
      }
    });
  }

  getAllCommentsByArticle(article: Article){
    const url = `${this.baseUrl}articles/${article.slug}/comments`;
    return this.http.get<MultipleComments>(url);
  }

  getCurrentUser(){
    const url = this.baseUrl + 'user';
    return this.http.get<SingleUser>(url);
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
