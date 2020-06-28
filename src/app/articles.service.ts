import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleList } from './model/article-list';
import { TagList } from './model/tag-list';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly baseUrl = 'https://conduit.productionready.io/api';

  constructor(private http: HttpClient) {}

  getArticles(params: { tag: string; limit: number }): Observable<ArticleList> {
    const url = `${this.baseUrl}/articles?tag=${params.tag}&limit=${params.limit}`;
    return this.http.get<ArticleList>(url);
  }
  getTags(): Observable<TagList> {
    const url = `${this.baseUrl}/tags`;
    return this.http.get<TagList>(url);
  }
  commentOnArticle(params: {
    smug: string;
    commentBody: string;
    token: string;
  }) {
    const url = `${this.baseUrl}/articles/${params.smug}/comments`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${params.token}`,
      }),
    };
    return this.http.post(
      url,
      { comment: { body: params.commentBody } },
      httpOptions
    );
  }
}
