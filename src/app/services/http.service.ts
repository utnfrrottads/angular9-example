import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultipleArticles, Article, SingleArticle } from '../model/article';
import { SingleUser, User } from '../model/user';
import { Author } from '../model/author';
import { MultipleComments, Comment } from '../model/comment';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { BaseInterface } from '../model/base-interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService) { }

  getAllArticles(page: number, limit:number){
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}articles?limit=${limit}&offset=${offset}`;
    return this.http.get<MultipleArticles>(url);
  }

  getMyArticles(page: number, limit:number, callback){
    const offset = (page - 1) * limit;
    let myArticles: Article[];

    this.getCurrentUser().subscribe( ({user}) => {
      const url = `${this.baseUrl}articles?author=${user.username}&limit=${limit}&offset=${offset}`;
      this.http.get<MultipleArticles>(url).subscribe(callback);
    });
    
    return myArticles;
  }

  getArticlesByTag(tag:string) {
    const limit = 20;
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  createArticle(article: Article){
    const url = `${this.baseUrl}articles`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token}
    return this.http.post<SingleArticle>(url, {article}, {headers});
  }

  updateArticle(article: Article){
    const url = `${this.baseUrl}articles/${article.slug}`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
    return this.http.put<SingleArticle>(url, {article}, {headers});
  }

  deleteArticle(article: Article){
    const url = `${this.baseUrl}articles/${article.slug}`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
    this.http.delete<BaseInterface>(url, {headers}).subscribe(
      response => {
        if(response.errors !== undefined){
          alert('Error when deleting article');
        }
      });
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
    let observable = this.http.delete<BaseInterface>(url, {headers});
    observable.subscribe( response => {
      if(response.errors !== undefined){
        alert('Error when deleting comment');
      }
    });

    return observable;
  }

  getAllCommentsByArticle(article: Article){
    const url = `${this.baseUrl}articles/${article.slug}/comments`;
    return this.http.get<MultipleComments>(url);
  }

  getCurrentUser(){
    const url = this.baseUrl + 'user';
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
    return this.http.get<SingleUser>(url, {headers});
  }

  registerUser(user: User){
    const url = `${this.baseUrl}users`;
    let observable = this.http.post<SingleUser>(url,{user});
    observable.subscribe(response => {
        if(response.errors === undefined){
          this.storage.saveLogIn(response.user);
        }
    });
    return observable;
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
