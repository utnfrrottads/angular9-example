import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  page = 1;
  articles: [];
  username: any;

  constructor(private articleServices: ArticlesService,
              private router: Router){
                  this.articleServices.getArticles(this.page)
                  .subscribe((resp: any) => {
                  this.articles = resp.articles;
                  });
  }

ngOnInit(): void {
}

islogged(){
  this.username = localStorage.getItem('username');
  if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
    return false;
  }
  else{
    return true;
  }
}
logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  this.router.navigateByUrl('/login');
}
updateArticle(slug: any){
  this.router.navigate(['/article', slug]);
}

deleteArticle(slug ){
  Swal.fire({
    title: 'Estas seguro de eliminar el articulo?',
    text: 'Una vez borrado ya no hay vuelta atras',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar Articulo'
  }).then((result) => {
    if (result.isConfirmed) {
      this.articleServices.deleteArticle(slug)
                  .subscribe(resp => {
                    Swal.fire({
                      title: 'Articulo Borrado',
                      icon: 'success',
                      timer: 2000,
                    });
                    window.location.reload();
                  }, (err) => {
                      Swal.fire('No es propietario', 'Para poder eliminar un articulo, debe ser el propietario', 'error');
                  });
    }
  });
}

getComments(slug){
  this.router.navigate(['/article/comments', slug]);
}
 getMoreArticles(filter){
  if (filter === true){
     this.page = this.page + 1;
  }
  if (filter === false){
    if (this.page > 1){
      this.page = this.page - 1;
    }else{
      return;
    }
  }
  this.articleServices.getArticles(this.page)
            .subscribe((resp: any) => {
              this.articles = resp.articles;
            });
 }
}
