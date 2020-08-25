import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(){
    this.http.getAllArticles().subscribe(response => this.articles = response.articles );
  }

  getMyArticles(){
    this.articles=[]; //test
    //this.http.getMyArticles().subscribe(response => this.articles = response.articles );
  }
}
