import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  readonly baseUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) {}
  
  getArticles() {
    let url = this.baseUrl + 'articles';
    return this.http.get<any>(url);
  }

}
