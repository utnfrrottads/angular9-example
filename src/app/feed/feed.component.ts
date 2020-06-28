import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticlesService } from '../articles.service';
import { AuthService } from '../auth.service';
import { UserData } from '../model/user-data';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  tags: string[] = [];
  articles: Article[] = [];
  user: UserData;

  constructor(
    private articleService: ArticlesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadTags();
    this.loadUser('somisa@somisa.com', 'somisa2000');
  }

  onTagSelected(selectedTag) {
    this.loadArticles(selectedTag, 5);
  }

  loadUser(email: string, password: string) {
    this.authService
      .login({
        email: email,
        password: password,
      })
      .subscribe((response) => (this.user = response.user));
  }

  loadArticles(tag, limit) {
    this.articleService
      .getArticles({ tag: tag, limit: limit })
      .subscribe((response) => (this.articles = response.articles));
  }

  loadTags() {
    this.articleService
      .getTags()
      .subscribe((response) => (this.tags = response.tags));
  }
}
