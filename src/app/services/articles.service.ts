import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  editArticle() {
    let httpOption = {
      headers: new HttpHeaders({ Authorization: 'Token ' + localStorage.getItem('token') }),
    };
    let putUrl = this.baseUrl+`articles/${this.actualArticle.slug}`;
    return this.http.put(putUrl,httpOption);
  }

  actualArticle:any = {};
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}

  getArticles() {
    let url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }

  deleteArticle(slug) {
    let httpOption = {
      headers: new HttpHeaders({ Authorization: 'Token ' + localStorage.getItem('token') }),
    };
    return this.http.delete(this.baseUrl +  `articles/${slug}`,httpOption)
}
registration(username, email, pass) {
  let url = this.baseUrl + 'users';
  let body = {
    user: {
      username: username,
      email: email,
      password: pass,
    },
  };
  return this.http.post(url, body, {});
}

  login(user, pass) {
    let url = this.baseUrl + 'users/login';
    let body = {
      user: {
        email: user,
        password: pass,
      },
    };

    return this.http.post(url, body, {});
  }
  getArticleBySlug(slug){
    let url = this.baseUrl + 'articles/'+slug;
    return this.http.get<any>(url);
  }
  
  postArticle(article) {
      let httpOption = {
        headers: new HttpHeaders({ Authorization: 'Token ' + localStorage.getItem('token') }),
      };
      let postUrl = this.baseUrl+'articles';
      return this.http.post(postUrl, article, httpOption);
    };

}



    
  

