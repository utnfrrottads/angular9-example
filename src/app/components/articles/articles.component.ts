import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = [];
  page:number = 1;
  totalItems: string;

  constructor(private router: Router, private service:ArticlesService) { 
    
  }

  ngOnInit(): void {
    this.articles = this.service.getArticles().subscribe((response) => {
      this.articles = response.articles;
    })
  }

  onDelete(article) {
    if (window.confirm("Are you sure?")) {
      //this.service.deleteArticle(article.slug).subscribe()
    }
  }

  showArticle(article){
    /*this.router.navigate([''])*/
  }
}
