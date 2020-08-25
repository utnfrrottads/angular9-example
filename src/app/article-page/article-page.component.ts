import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit(): void {
  }

}
