import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) { }
  response:any;

  //ABC comments

  //Alta
  setComment(comment,article,usr){
    let slug = article.slug;
    const urlAuthentication = this.baseUrl + 'users/login';

    this.http.post(urlAuthentication,usr).subscribe((response:any)=>{
      let token = response.user.token;

      let urlComment = this.baseUrl + 'articles/'+ slug +'/comments';

      let httpOptions = {headers: new HttpHeaders({
        'Authorization': 'Token '+ token
      })}

      this.http.post(urlComment, comment, httpOptions).subscribe(response=>{
        this.response = response
      });

      return this.response;
    });


  }
  //Baja
  deleteComment(comment,article){
    let slug = article.slug;
    let id = comment.id;

    const urlDelete = this.baseUrl + 'articles/'+ slug +'/comments/'+id;

    return this.http.delete<any>(urlDelete);
  }

  //Consulta
  getComments(article){
    let slug = article.slug;
    const urlGetComments = this.baseUrl + 'articles/'+ slug +'/comments';

    return this.http.get<any>(urlGetComments);
  }
}
