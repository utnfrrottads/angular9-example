import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(page){
    return this.http.get(`https://conduit.productionready.io/api/articles?limit=5&offset=${(page - 1) * 5}`);
  }
  createArticle(dataForm){
    const article = {
      article: {
        title: dataForm.title,
        description: dataForm.description,
        body: dataForm.body
      }
    };
    const httpOptions = {
    headers : new HttpHeaders({
      Authorization: 'Token ' + localStorage.getItem('token')
    })
    };
    return this.http.post('https://conduit.productionready.io/api/articles', article, httpOptions);
  }

  getArticle(slug: string){

    return this.http.get(`https://conduit.productionready.io/api/articles/${slug}`);
  }

  updateArticle(slug, dataForm){
    const article = {
      article: {
        title: dataForm.title,
        description: dataForm.description,
        body: dataForm.body
      }
   };
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token')
        })
    };
    return this.http.put(`https://conduit.productionready.io/api/articles/${slug}`, article, httpOptions);
  }
  deleteArticle(slug){
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token')
        })
    };
    return this.http.delete(`https://conduit.productionready.io/api/articles/${slug}`, httpOptions);
  }
}
