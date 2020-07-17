import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';
  hardcodedMail = 'utnfrro@utn.frro';
  hardcodedPass = 'utnutnutn';

  constructor(private http: HttpClient) {}
  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  getArticlesByTag(tag: string) {
    const url = this.baseUrl + `articles?tag=${tag}`;
    return this.http.get<any>(url);
  }

  postComment(text, slug) {
    const loginUrl = this.baseUrl + 'users/login';
    this.http
      .post(loginUrl, {
        user: {
          email: this.hardcodedMail,
          password: this.hardcodedPass,
        },
      })
      .subscribe((response) => {
        const token = response['user']['token'];
        const url = this.baseUrl + `/articles/${slug}/comments`;
        this.http
          .post(
            url,
            {
              comment: { body: text },
            },
            {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + token,
              }),
            }
          )
          .subscribe((res) =>
            alert(
              'Thanks ' +
                res['comment']['author']['username'] +
                ', your comment was saved'
            )
          ),
          (err) => console.log(err);
      });
  }
}
