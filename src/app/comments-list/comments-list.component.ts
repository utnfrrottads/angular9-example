import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  comments: Comment[] = [];
  @Input() article;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllCommentsByArticle(this.article).subscribe(response => this.comments = response.comments);
  }

}
