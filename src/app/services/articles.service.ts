import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  actualArticle: any = {};

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}

  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }

  deleteArticle(slug) {
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      }),
    };
    return this.http.delete(this.baseUrl + `articles/${slug}`, httpOption);
  }
  registration(usernameParam, emailParam, pass) {
    const url = this.baseUrl + 'users';
    const body = {
      user: {
        username: usernameParam,
        email: emailParam,
        password: pass,
      },
    };
    return this.http.post(url, body, {});
  }

  login(user, pass) {
    const url = this.baseUrl + 'users/login';
    const body = {
      user: {
        email: user,
        password: pass,
      },
    };

    return this.http.post(url, body, {});
  }
  getArticleBySlug(slug) {
    const url = this.baseUrl + 'articles/' + slug;
    return this.http.get<any>(url);
  }

  postArticle(article) {
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      }),
    };
    const postUrl = this.baseUrl + 'articles';
    return this.http.post(postUrl, article, httpOption);
  }

  editArticle(article) {
    console.log(article);
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      }),
    };
    const putUrl = this.baseUrl + 'articles/' + article.slug;

    return this.http.put(putUrl, article, httpOption);
  }
}
