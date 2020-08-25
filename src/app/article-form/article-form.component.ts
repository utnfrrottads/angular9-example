import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit(): void {
  }

}
