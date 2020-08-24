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
  page = 1;
  totalItems: string;

  constructor(private router: Router, private service: ArticlesService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }

    this.service.getArticles().subscribe((response) => {
      this.articles = response.articles;
    });
  }
  onEdit(article) {
    this.service.actualArticle = article;
    this.router.navigate(['/editArticle', article.slug]);
  }

  onDelete(article) {
    if (window.confirm('¿Estas seguro?')) {
      this.service.deleteArticle(article.slug).subscribe();
      const index = this.articles.findIndex((e) => article.slug === e.slug);
      this.articles.splice(index, 1);
    }
  }

  showComments(article) {
    this.router.navigate(['/article', article.slug]);
  }

  canEdit(article) {
    if (article.author.username === localStorage.getItem('username')) {
      return true;
    }
    return false;
  }
}
