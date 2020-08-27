import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  articles:any = [];
  user: any = false;

  constructor(private service: ArticlesService) { 
    this.loadArticles();
  }

  loadArticles() {
    this.service.getArticles().subscribe(response => this.articles = response.articles);
  }

  commentArticle(slug, comment){
    this.service.commentArticle(this.user.token, slug, comment.value).subscribe(response => console.log(response));
    comment.value = '';
  }

  userIsLogged(){
    return this.user !== false;
  }
}
