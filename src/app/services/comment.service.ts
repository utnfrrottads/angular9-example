import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient) { }


  getComments(slug){
    return this.http.get(`https://conduit.productionready.io/api/articles/${slug}/comments`);
  }

  deleteComment(slug, id){
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token')
     })
    };
    return this.http.delete(`https://conduit.productionready.io/api/articles/${slug}/comments/${id}`, httpOptions);

  }

  addComment(slug, comment){
    const body = {
      comment: {
        body: comment
      }
    };
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token')
     })
    };
    return this.http.post(`https://conduit.productionready.io/api/articles/${slug}/comments`, body, httpOptions);
  }
}
