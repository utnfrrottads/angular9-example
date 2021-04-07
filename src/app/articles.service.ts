import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly baseUrl = 'https://conduit.productionready.io/api/';
  
  
  constructor(private http: HttpClient) { }
  usrReturned:any;
  response:any;

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
  setComment(comment, article){

    //user: igc@ttadsmail.com
    //pass: igcttads2020
    let usuario = {
      "user":{
        "email": "igc@ttadsmail.com",
        "password": "igcttads2020"
      }
    }
    let slug = article.slug;


    const urlAuthentication = this.baseUrl + 'users/login';
    this.http.post(urlAuthentication,usuario).subscribe((response:any)=>{
      let token = response.user.token;

      let urlComment = this.baseUrl + 'articles/'+ slug +'/comments';
      let httpOptions = {headers: new HttpHeaders({
        'Authorization': 'Token '+ token
      })}

      this.http.post(urlComment, comment, httpOptions).subscribe(response=>{
        this.response = response
        console.log(this.response)
      });
      return this.response;
    });

  }    
}
