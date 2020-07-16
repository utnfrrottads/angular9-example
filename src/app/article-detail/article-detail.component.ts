import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article:any;
  textAreaVisible:boolean;
  comment: string = '';
  constructor(private service:ArticlesService) { }

  ngOnInit(): void {

  }
  save(comment){    
    this.service.postComment(comment.value,this.article).subscribe();
  }
}
