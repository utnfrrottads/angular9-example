import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  tags: string[] = [];
  articles: Article[] = [];
  constructor(private service: ArticlesService) {}

  ngOnInit(): void {
    this.loadTags();
  }

  onTagSelected(selectedTag) {
    this.loadArticles(selectedTag, 5);
  }

  loadArticles(tag, limit) {
    this.service
      .getArticles({ tag: tag, limit: limit })
      .subscribe((response) => (this.articles = response.articles));
  }

  loadTags() {
    this.service.getTags().subscribe((response) => (this.tags = response.tags));
  }
}
