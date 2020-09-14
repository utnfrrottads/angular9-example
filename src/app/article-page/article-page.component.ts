import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';
import { HttpService } from '../services/http.service';
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { Author } from '../model/author';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: Article;
  comments: Comment[];
  currentUser: User;

  constructor(
    private articleService: ArticleService,
    private http: HttpService,
    private router: Router,
    private storage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle();
    this.updateComments();
  }

  updateComments(){
    this.http.getAllCommentsByArticle(this.article).subscribe(
      response => this.comments = response.comments
    );
    if (this.storage.getAuthentication()){
      this.http.getCurrentUser().subscribe(response => this.currentUser = response.user);
    }
  }

  updateArticle(){
    this.router.navigate(['editor/update']);
  }

  deleteArticle(){
    this.http.deleteArticle(this.article);
  }

  belongsToAuthor(author: Author){
    if (this.currentUser !== undefined && author.username === this.currentUser.username){
      return true;
    }
    else{
      return false;
    }
  }
}
