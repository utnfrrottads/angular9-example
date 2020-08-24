import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  article: any;
  articleForm = new FormGroup({   
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]), 
  });

  slug: any;
  editionMode: boolean = false;

  constructor(
    private service: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // si se quiere meter sin estar logeado, lo manda al Login.
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }

    //si trajo un article slug, significa que estoy editando:
    if (this.route.snapshot.paramMap.get('slug') !== null) {
      this.slug = this.route.snapshot.paramMap.get('slug');

      this.service.getArticleBySlug(this.slug).subscribe((res) => {
        this.article = res.article;
        //lleno los campos del form

        this.articleForm.controls.title.patchValue(this.article.title);
        this.articleForm.controls.body.patchValue(this.article.body);
        this.articleForm.controls.description.patchValue(
          this.article.description
        );
        this.articleForm.controls.slug.patchValue(this.article.slug);
      });
      this.toggleEditionMode();
    }
  }

  toggleEditionMode() {
    this.editionMode = !this.editionMode;
  }

  postArticle() {
    if (!this.editionMode) {
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
    } else {
      this.article = {
        title: this.articleForm.controls.title.value,
        body: this.articleForm.controls.body.value,
        description: this.articleForm.controls.description.value,
        slug: this.articleForm.controls.slug.value,
      };

      this.service.editArticle(this.article).subscribe(
        (res) => {
          this.router.navigate(['articles']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
