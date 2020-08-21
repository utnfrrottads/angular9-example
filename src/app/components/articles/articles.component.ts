import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = [];
  page:number = 1;
  totalItems: string;
  constructor(private service:ArticlesService) { 
    
  }

  ngOnInit(): void {
    this.articles = this.service.getArticles().subscribe((response) => {
      this.articles = response.articles;
    })
  }

}
