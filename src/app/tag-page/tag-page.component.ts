import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss'],
})
export class TagPageComponent {
  constructor(private service: ArticlesService) {}

  tags: any = [];
  articles: any[];

  istagSelected = false;
  tagSelected: string;

  loadTags() {
    this.service.getTags().subscribe((response) => {
      this.tags = response.tags;
      this.istagSelected = true;
    });
  }
  loadArticlesByTag(tag) {
    this.service.getArticlesByTag(tag).subscribe((response) => {
      this.articles = response.articles.slice(0, 5);
      this.istagSelected = true;
      this.tagSelected = tag;
    });
  }

  onNewTagSelection(tag: String) {
    this.loadArticlesByTag(tag);
  }
}
