import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
    tagList: new FormControl('')
  });
  @Input() article;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  saveArticle(){
    this.http.createArticle(this.articleForm.value);
  }
}
