import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() commentDeleted = new EventEmitter();

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getCurrentUser().subscribe( response => this.currentUser = response.user);
  }

  deleteComment(comment: Comment){
    this.http.deleteComment(this.article, comment).subscribe( () => this.commentDeleted.emit() );
  }

}
