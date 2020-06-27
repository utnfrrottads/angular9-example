import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor() {}

  ngOnInit(): void {}
}
