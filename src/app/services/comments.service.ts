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
  setComment(comment,slug,token){
    
    let urlComment = this.baseUrl + 'articles/'+ slug +'/comments';
    let httpOptions = {headers: new HttpHeaders({
        'Authorization': 'Token '+ token
      })}

    this.http.post(urlComment, comment, httpOptions).subscribe(response=>{
        this.response = response;
        return this.response;
    });

  }

  //Baja
  deleteComment(commentId,article,token){
    let slug = article.slug;

    const urlDelete = this.baseUrl + 'articles/'+ slug +'/comments/'+commentId;
    let httpOptions = {headers: new HttpHeaders({
      'Authorization': 'Token '+ token
    })}

    this.http.delete<any>(urlDelete, httpOptions).subscribe(response=>{
      return this.response;
    });
  }

  //Consulta
  getComments(article){
    let slug = article.slug;
    const urlGetComments = this.baseUrl + 'articles/'+ slug +'/comments';

    return this.http.get<any>(urlGetComments);
  }
}
