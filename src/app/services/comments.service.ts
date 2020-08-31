import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  response: any;
  readonly baseUrl = this.service.getBaseUrl();
  
  constructor(private http: HttpClient,
    private service: LocalStorageService) { }

  getComments(slug) {
    const url = this.baseUrl + 'articles/' + slug + '/comments';
    return this.http.get<any>(url);
  }

  setComment(comment, slug, token) {
    const url = this.baseUrl + 'articles/' + slug + '/comments';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + token,
      }),
    };
    return this.http.post(url, comment, httpOptions);
  }

  deleteComment(commentId, slug, token) {
    const urlDelete =
      this.baseUrl + 'articles/' + slug + '/comments/' + commentId;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + token,
      }),
    };
    return this.http.delete<any>(urlDelete, httpOptions);
  }

}