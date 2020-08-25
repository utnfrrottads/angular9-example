import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MultipleArticles, Article } from '../model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles: Article[];

  constructor(private router: Router ) { }

  ngOnInit(): void {

  }

  goToArticlePage(article: Article){
    this.router.navigate(['article']); //ver como pasar parametros
  }

}
