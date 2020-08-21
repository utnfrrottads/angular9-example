import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  article:any;
  articleForm = new FormGroup({
    slug: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private service:ArticlesService) { }

  ngOnInit(): void {
  }

  postArticle() {
    this.article = {
      title:this.articleForm.controls.title.value,
      body:this.articleForm.controls.body.value,
      description:this.articleForm.controls.body.value,
      tags:["reactjs", "angularjs", "dragons"]

    }
    this.service.postArticle(this.article).subscribe();

  }
}
