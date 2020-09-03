import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  articles: Article[] = [];
  tags: string[] = [];
  readonly pageLimit = 10;
  pages: number[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAllArticles(1);
    this.getAllTags();
  }

  getAllArticles(page: number){
    this.http.getAllArticles(page, this.pageLimit).subscribe(response => {
        this.articles = response.articles;
        const pagesCount = (Math.ceil(response.articlesCount / this.pageLimit));
        
        this.pages = [];
        for(let i=0; i < pagesCount; i++){
          this.pages.push(i+1);
        }
      });
  }

  getAllTags(){
    this.http.getAllTags().subscribe(response => this.tags = response.tags);
  }

  getMyArticles(page: number){
    this.http.getMyArticles(page, this.pageLimit, 
      response => {
        this.articles = response.articles;
        const pagesCount = (Math.ceil(response.articlesCount / this.pageLimit));
        
        this.pages = [];
        for(let i=0; i < pagesCount; i++){
          this.pages.push(i+1);
        }
      });
  }
  
}
