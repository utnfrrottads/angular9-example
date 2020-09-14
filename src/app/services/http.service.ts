import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultipleArticles, Article, SingleArticle } from '../model/article';
import { SingleUser, User } from '../model/user';
import { Author } from '../model/author';
import { MultipleComments, Comment } from '../model/comment';
import { LocalStorageService } from './local-storage.service';
import { Observable, Subscription } from 'rxjs';
import { BaseInterface } from '../model/base-interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  getMyArticlesSubscription: Subscription;
  deleteArticleSubscription: Subscription;
  deleteCommentSubscription: Subscription;
  registerUserSubscription: Subscription;
  loginSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) { }

  ngOnDestroy(){
    this.getMyArticlesSubscription.unsubscribe();
    this.deleteArticleSubscription.unsubscribe();
    this.deleteCommentSubscription.unsubscribe();
    this.registerUserSubscription.unsubscribe();
    this.loginSubscription.unsubscribe();
  }

  getAllArticles(page: number, limit: number){
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}articles?limit=${limit}&offset=${offset}`;
    return this.http.get<MultipleArticles>(url);
  }

  getMyArticles(page: number, limit: number, callback){
    const offset = (page - 1) * limit;

    this.getMyArticlesSubscription = this.getCurrentUser().subscribe( ({user}) => {
      const url = `${this.baseUrl}articles?author=${user.username}&limit=${limit}&offset=${offset}`;
      this.http.get<MultipleArticles>(url).subscribe(callback);
    });
  }

  getArticlesByTag(tag: string) {
    const limit = 20;
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  createArticle(article: Article){
    const url = `${this.baseUrl}articles`;
    const token = this.storage.getAuthentication();
    const headers = {Authorization: 'Token ' + token};
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
    this.deleteArticleSubscription = this.http.delete<BaseInterface>(url, {headers}).subscribe(
      response => {
        if (response.errors !== undefined){
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
    const observable = this.http.delete<BaseInterface>(url, {headers});
    this.deleteCommentSubscription = observable.subscribe( response => {
      if (response.errors !== undefined){
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
    const observable = this.http.post<SingleUser>(url, {user});
    this.registerUserSubscription = observable.subscribe(response => {
        if (response.errors === undefined){
          this.storage.saveLogIn(response.user);
        }
    });
    return observable;
  }

  logIn(user: User){
    const url = `${this.baseUrl}users/login`;
    const observable = this.http.post<SingleUser>(url, {user});
    this.loginSubscription = observable.subscribe(response => this.storage.saveLogIn(response.user));
    return observable;
  }

  logOut(){
    this.storage.logOut();
  }
}
