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
    return this.selectedTag === tag;
  }

  login(){
    this.service.logIn().subscribe(response => this.user = response.user);
  }

  commentArticle(slug, comment){
    this.service.commentArticle(this.user.token, slug, comment.value).subscribe(response => console.log(response));
    comment.value = '';
  }

  userIsLogged(){
    return this.user !== false;
  }
}
