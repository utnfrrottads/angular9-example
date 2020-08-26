import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  articleForm = new FormGroup({
    slug: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
    tagList: new FormControl('')
  });
  @Input() article;

  constructor() { }

  ngOnInit(): void {
  }

  saveArticle(){

  }
}
