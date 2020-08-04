import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  hardcodedUser: any = {
    email: "niconelli2@gmail.com",
    password: "fakeworld"
  }

  constructor(private http: HttpClient) { }
  
  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }

  getArticlesByTag(tag: string){
    const url = this.baseUrl + `articles?tag=${tag}`;
    return this.http.get<any>(url);
  }

  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  
  postNewComment(text: string, endpoint: string) {
    const userUrl = this.baseUrl + 'users/login';
    this.http.post(userUrl, { user: this.hardcodedUser })
    .subscribe((response) => {
      const token = response["user"]["token"];
      const commentsUrl = this.baseUrl + `articles/${endpoint}/comments`;
      this.http.post(
        commentsUrl,
        {
          comment: { body: text }
        },
        {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          })
        }
      )
      .subscribe((res) => { alert("Comment uploaded successfully") }),
      (err: any) => { console.log(err); }
    }),
    (err: any) => { console.log(err); }
  }
}
