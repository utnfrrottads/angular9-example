import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = []
  tags: any = [];
  user:any;

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {

  }
  loadTags() {
    this.service.getTags().subscribe(response => this.tags = response.tags);   
  }

  loadArticles(tagName){
    this.service.getTagArticles(tagName).subscribe(response => {
      this.articles = response.articles.slice();  //con el slice me evito de hacer un for
    });
  }


  addComment(article){
    //{"user":{"id":103806,"email":"igc@ttadsmail.com","createdAt":"2020-06-29T19:48:39.963Z","updatedAt":"2020-06-29T19:48:39.970Z","username":"igc","bio":null,"image":null,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAzODA2LCJ1c2VybmFtZSI6ImlnYyIsImV4cCI6MTU5ODY0NjY3OX0.ppArFTkskBSIwHbzG1qe-NyLdP3QcjWIAWgjPAm7RrI"}}
    let comentario = {'comment':{
      body: (document.getElementById('comentario') as HTMLInputElement).value
    }}
    this.service.setComment(comentario,article);
  }
}
