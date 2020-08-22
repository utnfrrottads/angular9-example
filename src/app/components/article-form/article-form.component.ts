import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  article: any;
  articleForm = new FormGroup({
    tags: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private service: ArticlesService, private router: Router) {}

  ngOnInit(): void {
    // si se quiere meter sin estar logeado, lo manda al Login.
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
  }

  postArticle() {
    this.article = {
      title: this.articleForm.controls.title.value,
      body: this.articleForm.controls.body.value,
      description: this.articleForm.controls.description.value,
    };
    this.service.postArticle(this.article).subscribe(
      (res) => {
        this.router.navigate(['articles']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
