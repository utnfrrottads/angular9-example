import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Array<any> = [];
  page = 1;
  totalItems: string;

  constructor(private router: Router, private articleService: ArticlesService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }

    this.articleService.getArticles(this.page).subscribe((response) => {
      this.articles = response.articles;
    });
  }

  onEdit(article) {
    this.articleService.actualArticle = article;
    this.router.navigate(['/editArticle', article.slug]);
  }

  onDelete(article) {
    if (window.confirm('¿Estas seguro?')) {
      this.articleService.deleteArticle(article.slug).subscribe();
      this.articleService.getArticles(this.page).subscribe((response) => {
        this.articles = response.articles;
      });
    }
  }

  showComments(article) {
    this.router.navigate(['/article', article.slug]);
  }

  canEdit(article) {
    return article.author.username === localStorage.getItem('username');
  }

  previousPage(){
    if (this.page > 1){
      this.page = this.page - 1;
    }
    this.articleService.getArticles(this.page).subscribe((response) => {
      this.articles = response.articles;
    });  }

  nextPage(){
    this.page = this.page + 1;
    this.articleService.getArticles(this.page).subscribe((response) => {
      this.articles = response.articles;
    });
  }
}
