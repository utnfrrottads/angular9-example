import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}
  getArticles() {
    let url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }
  getTags() {
    let url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  getArticlesByTag(tag) {
    let url = this.baseUrl + 'articles?tag=' + tag;
    return this.http.get<any>(url);
  }
  sendComment(comment, slug) {
    //login
    let url = this.baseUrl + 'users/login';
    let body = {
      user: {
        email: 'danilobassi44@gmail.com',
        password: '123456789',
      },
    };

    this.http.post(url, body, {}).subscribe((res: any) => {
      let token = res.user.token;
      let postUrl = this.baseUrl + `articles/${slug}/comments`;
      let httpComment = {
        comment: {
          body: comment,
        },
      };
      let httpOption = {
        headers: new HttpHeaders({ Authorization: 'Token ' + token }),
      };

      this.http.post(postUrl, httpComment, httpOption).subscribe((res) => {
        console.log(res);
      });
    });
  }
}
