import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';
  
  
  constructor(private http: HttpClient) { }
  usrReturned:any;
  respuesta:any;

  getTagArticles(tag) {
    const url = this.baseUrl + 'articles?tag='+tag;
    return this.http.get<any>(url);
  }
  getArticles() {
    const url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }
  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  setComment(token,comment,slug){
    const url = this.baseUrl + 'articles/'+ slug +'/comments';
    const httpOptions = {headers: new HttpHeaders({
      'Authorization': 'Token '+ token
    })}

     this.http.post(url, comment, httpOptions).subscribe(response=>{this.respuesta = response});
     return this.respuesta;
  }
  authentication(usuario){
    const url = this.baseUrl + 'users/login';
    this.http.post(url,usuario).subscribe(response=>{this.usrReturned = response});
    return this.usrReturned.user;
    }
    
}
