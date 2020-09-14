import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnDestroy {

  commentForm = new FormGroup({
    body: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  @Input() article;
  @Output() commentSent = new EventEmitter();

  commentSubscription: Subscription;

  constructor(
    private http: HttpService,
    private storage: LocalStorageService,
    private router: Router
  ) { }

  ngOnDestroy(){
    this.commentSubscription.unsubscribe();
  }

  sendComment(){
    if (!this.storage.getAuthentication()){
      alert('You need to log in');
      this.router.navigate(['login']);
    }
    else{
      this.commentSubscription = this.http.addCommentToArticle(this.article, this.commentForm.value).subscribe( response => {
        if (response.errors !== undefined){
          alert('Error when commenting');
        }
        else{
          this.commentSent.emit(this.article);
        }
      });
      this.commentForm.reset();
    }

  }
}
