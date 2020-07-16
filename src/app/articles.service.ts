import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';
  user: any;

  constructor(private http: HttpClient) { }
  getArticles(selectedTag) {
    console.log(selectedTag)
    const url = this.baseUrl + 'articles?tag='+selectedTag+ '&limit=5';
    return this.http.get<any>(url);
  }
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }

  login(){
    const url = this.baseUrl + 'users/login';
    let body = { user: {email:'sebisportivo@gmail.com', password:'123123123'} };
    this.http.post<any>(url,body).subscribe(response => this.user = response.user);
  }

  postComment(commentParameter, article){

      const url = this.baseUrl + 'articles/' + article.slug + '/comments';
      let postBody = {comment: {body:commentParameter}};
      const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + this.user.token
        })
      };
      return this.http.post(url, postBody, httpOptions);
  }

     
  
}
