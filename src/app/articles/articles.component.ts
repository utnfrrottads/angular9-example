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
}
