import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { CommentService } from 'src/app/services/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  article: any = {};
  comments: [];
  commentForm = false;
  slug: any;
  commentControl = new FormControl('', Validators.required);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private articleService: ArticlesService,
              private commentService: CommentService) {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.getData();
  }

  ngOnInit(): void {
  }
  getData(){
    this.articleService.getArticle(this.slug)
            .subscribe((resp: any) => {
              this.article = resp.article;
            });
    this.commentService.getComments(this.slug)
                  .subscribe((resp: any) => {
                    this.comments = resp.comments;
                  });
  }

  addComment(){
    this.commentForm = !this.commentForm;
    this.commentService.addComment(this.slug, this.commentControl.value)
                    .subscribe((resp: any) => {
                      Swal.fire({
                        title: 'Comentario posteado',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                        allowOutsideClick: false
                      });
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                    }, (err) => {
                      Swal.fire('Ha ocurrido un error', 'Ingrese correctamente los datos', 'error');
                    });
  }


  islogged(){
    if (localStorage.getItem('token') === null) {
      return false;
    }
    else{
      return true;
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }


  deleteComment(id){
    Swal.fire({
      title: 'Estas seguro de eliminar el comentario?',
      text: 'Una vez borrado ya no hay vuelta atras',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar Comentario'
    }).then((result) => {
      if (result.isConfirmed) {
        this.commentService.deleteComment(this.slug, id)
              .subscribe(resp => {
                      Swal.fire({
                        title: 'Comentario Borrado',
                        icon: 'success',
                        timer: 2000,
                      });
                      window.location.reload();
                    }, (err) => {
                        Swal.fire('No es propietario', 'Para poder eliminar un comentario, debe ser el propietario', 'error');
                    });
      }
    });
  }
}

