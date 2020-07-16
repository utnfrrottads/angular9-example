import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  articles:any;
  @Input() tag:any;

  constructor(private service:ArticlesService) { }

  ngOnInit(): void {
  }

  loadArticles() {
    this.service.getArticles(this.tag).subscribe(response => this.articles = response.articles);   
  }

}
