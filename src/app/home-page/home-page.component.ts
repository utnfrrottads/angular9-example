import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Article } from '../model/article';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  tags: string[] = [];
  readonly pageLimit = 10;
  pages: number[] = [];
  articlesMode = 'all';
  page = 1;
  paramsSubscription: Subscription;

  callbackPaginator = response => {
    this.articles = response.articles;
    const pagesCount = (Math.ceil(response.articlesCount / this.pageLimit));

    this.pages = [];
    for (let i = 0; i < pagesCount; i++){
      this.pages.push(i + 1);
    }
  }

  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.articlesMode = params.articlesMode;
      this.page = params.page;
    });

    this.getAllTags();

    switch (this.articlesMode){
      case undefined:
        this.router.navigate(['home/all/1']);
        this.http.getAllArticles(this.page, this.pageLimit).subscribe(this.callbackPaginator);
        break;
      case 'all':
        this.http.getAllArticles(this.page, this.pageLimit).subscribe(this.callbackPaginator);
        break;
      case 'myArticles':
        this.http.getMyArticles(this.page, this.pageLimit, this.callbackPaginator);
        break;
      default:
        this.router.navigate(['error']);
    }
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

  getAllArticles(page: number){
    this.router.navigate(['home/all/' + page]);
    this.http.getAllArticles(this.page, this.pageLimit).subscribe(this.callbackPaginator);
  }

  getAllTags(){
    this.tags = [];
    this.http.getAllTags().subscribe(response => this.tags = response.tags);
  }

  getMyArticles(page: number){
    this.router.navigate(['home/myArticles/' + page]);
    this.http.getMyArticles(this.page, this.pageLimit, this.callbackPaginator);
  }

  changePage(page: number){
    switch (this.articlesMode){
      case 'all':
        this.http.getAllArticles(page, this.pageLimit).subscribe(this.callbackPaginator);
        this.router.navigate(['home/all/' + page]);
        break;
      case 'myArticles':
        this.http.getMyArticles(page, this.pageLimit, this.callbackPaginator);
        this.router.navigate(['home/myArticles/' + page]);
        break;
    }
  }
}
