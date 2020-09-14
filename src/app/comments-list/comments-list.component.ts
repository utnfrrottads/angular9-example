import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../model/author';
import { LocalStorageService } from '../services/local-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit, OnDestroy {

  currentUser: User;
  deleteIcon = faTrash;
  userSubscription: Subscription;
  @Input() comments;
  @Input() article;
  @Output() commentDeleted = new EventEmitter();

  constructor(
    private http: HttpService,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.storage.getAuthentication()){
      this.http.getCurrentUser().subscribe( response => this.currentUser = response.user);
    }
  }

  ngOnDestroy(){
    if (this.userSubscription !== undefined){
      this.userSubscription.unsubscribe();
    }
  }

  deleteComment(comment: Comment){
    this.http.deleteComment(this.article, comment).subscribe( () => this.commentDeleted.emit() );
  }

  belongsToAuthor(author: Author){
    if (this.currentUser !== undefined && author.username === this.currentUser.username){
      return true;
    }
    else{
      return false;
    }
  }
}
