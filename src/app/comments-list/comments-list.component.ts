import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Comment } from '../model/comment';
import { User } from '../model/user';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  currentUser: User;
  @Input() comments;
  @Input() article;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getCurrentUser().subscribe( response => this.currentUser = response.user);
  }

  deleteComment(comment: Comment){
    this.http.deleteComment(this.article, comment);
  }

}
