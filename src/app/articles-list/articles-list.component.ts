import { Component, OnInit, Input } from '@angular/core';
import { MultipleArticles, Article } from '../model/article';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { User } from '../model/user';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../services/http.service';
import { Author } from '../model/author';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  updateIcon = faEdit;
  deleteIcon = faTrash;
  currentUser: User;
  @Input() articles: Article[];

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private http: HttpService,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    if(this.storage.getAuthentication()){
      this.http.getCurrentUser().subscribe(response => this.currentUser = response.user);
    }
  }

  goToArticlePage(article: Article){
    this.articleService.setArticle(article);
    this.router.navigate(['article']);
  }

  updateArticle(article: Article){
    this.articleService.setArticle(article);
    this.router.navigate(['editor/update']);
  }

  deleteArticle(article: Article){
    this.http.deleteArticle(article);
    this.router.navigate(['home/myArticles/1'])
  }

  belongsToAuthor(author: Author){
    if(this.currentUser !== undefined && author.username === this.currentUser.username){
      return true;
    }
    else{
      return false;
    }
  }

}
