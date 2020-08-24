import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Array<any> = [];
  page: number = 1;
  totalItems: string;

  constructor(private router: Router, private service: ArticlesService) {}

  ngOnInit(): void {
   
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
    
    this.service.getArticles().subscribe((response) => {
      this.articles = response.articles;
      console.log(this.articles);
    });
  }
  onEdit(article) {
    //  if (article.author.username === localStorage.getItem('author')) {
    this.service.actualArticle = article;
    this.router.navigate(['/editArticle', article.slug]);
    //}
    // y sino, me tiene que tirar un alert diciendo que no es el propietario
  }

  onDelete(article) {
    if (window.confirm('Are you sure?')) {
      this.service.deleteArticle(article.slug).subscribe(); 
    }
  }

  showComments(article) {
    this.router.navigate(['/article', article.slug]);
  }

  canEdit(article){
    if (article.author.username === localStorage.getItem('username')) 
      return true;
        return false;
  }
}
