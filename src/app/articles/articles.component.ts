import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = [];
  tags: any = [];
  selectedTag: any;
  user: any = false;
  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.loadTags();
  }

  loadArticles() {
    this.service.getArticles().subscribe(response => this.articles = response.articles);
  }

  loadTags() {
    this.service.getTags().subscribe(response => this.tags = response.tags);
  }

  loadArticlesByTag(tag){
    this.selectedTag = tag;
    this.service.getArticlesByTag(this.selectedTag).subscribe(response => this.articles = response.articles);
  }

  classActive(tag)
  {
    if(this.selectedTag == tag){
      return true;
    }
    else{
      return false;
    }
  }

  login(){
    this.service.logIn().subscribe(response => this.user = response.user);
    console.log(this.user.token);
  }

  commentArticle(slug, comment){
    this.service.commentArticle(this.user.token, slug, comment).subscribe(response => console.log(response));
  }

  userIsLogged(){
    if(this.user === false){
      return false;
    }
    else{
      return true;
    }
  }
}
