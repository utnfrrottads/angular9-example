import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';

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

  mode: string;
  article: Article;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.mode = params.mode);
    
    switch(this.mode){
      case 'update':
        this.articleForm.get('tagList').disable();
        this.article = this.articleService.getArticle();
        if(this.article !== undefined){
          this.articleForm.patchValue(this.article);
        }
        break;
      case 'create':
        break;
      default:
        this.router.navigate(['error']);
    }

  }

  saveArticle(){
    switch(this.mode){
      case 'update': this.updateArticle();
        break;
      case 'create': this.createArticle();
        break;
    }
  }

  createArticle(){
    this.http.createArticle(this.articleForm.value).subscribe(response => {
      if(response.errors !== undefined){
        alert('Error when creating article');
      }
      else{
        alert('Article successfully created');
        this.router.navigate(['home/myArticles/1']);
      }
    });
  }

  updateArticle(){
    Object.assign(this.article, this.articleForm.value);
    this.http.updateArticle(this.article).subscribe( response => {
      if(response.errors !== undefined){
        alert('Error when updating article');
      }
      else{
        alert('Article successfully updated');
        this.router.navigate(['home/myArticle/1']);
      }
    });
  }
}
