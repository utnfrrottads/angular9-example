import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}
  response: any;

  setComment(comment, slug, token) {
    const urlComment = this.baseUrl + 'articles/' + slug + '/comments';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + token,
      }),
    };

    return this.http.post(urlComment, comment, httpOptions);
  }

  deleteComment(commentId, article, token) {
    const slug = article.slug;

    const urlDelete =
      this.baseUrl + 'articles/' + slug + '/comments/' + commentId;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + token,
      }),
    };

    return this.http.delete<any>(urlDelete, httpOptions);
  }

  getComments(article) {
    const slug = article.slug;
    const urlGetComments = this.baseUrl + 'articles/' + slug + '/comments';
    return this.http.get<any>(urlGetComments);
  }
}
