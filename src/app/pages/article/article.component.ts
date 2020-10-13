import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  form = new FormGroup({
    title : new FormControl ('', Validators.required),
    description : new FormControl ('', Validators.required),
    body : new FormControl ('', Validators.required)
  });
  slug: any = null;
  article: any = {};

  constructor(private fb: FormBuilder,
              private articlesService: ArticlesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

        if (localStorage.getItem('token') === null) {
          this.router.navigateByUrl('/login');
        }
        this.createArticleForm();
  }

  ngOnInit(): void {
  }

  createArticleForm(){
    if (this.activatedRoute.snapshot.paramMap.get('slug') !== null){
      this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
      this.articlesService.getArticle(this.slug)
                .subscribe((resp: any) => {
                  this.article = resp.article;
                  this.form = this.fb.group({
                    title : [this.article.title, Validators.required],
                    description : [this.article.description, Validators.required],
                    body : [this.article.body, Validators.required]
                  });
                });
    }
  }
  fieldValid(field: string){
    return this.form.get(field).invalid &&
           this.form.get(field).touched;
  }
  createArticle(){
    if (this.form.invalid){
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return ;
    }
    this.articlesService.createArticle(this.form.value)
                        .subscribe((resp: any) => {
                          Swal.fire({
                            title: 'Articulo creado',
                            text: 'Titulo: ' + resp.article.title,
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                          });
                          setTimeout(() => {
                            this.router.navigateByUrl('/home');
                          }, 2000);
                        }, (err) => {
                          Swal.fire('Ha ocurrido un error', 'Ingrese correctamente los datos', 'error');
                      });
  }
  updateArticle(){
    if (this.form.invalid){
      Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
      });
      return ;
    }
    this.articlesService.updateArticle(this.slug, this.form.value)
                  .subscribe((resp: any) => {
                    Swal.fire({
                      title: 'Articulo editado',
                      text: 'Titulo: ' + resp.article.title,
                      icon: 'success',
                      timer: 2000,
                      showConfirmButton: false,
                      allowOutsideClick: false
                    });
                    setTimeout(() => {
                      this.router.navigateByUrl('/home');
                    }, 2000);
                  }, (err) => {
                    console.log(err);
                    Swal.fire('Ha ocurrido un error', 'Ingrese correctamente los datos', 'error');
                });
  }

}
