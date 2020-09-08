import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm = new FormGroup({
    body: new FormControl('',[Validators.required, Validators.maxLength(500)])
  })

  @Input() article;
  @Output() commentSent = new EventEmitter();

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log(this.article);
  }

  sendComment(){
    this.http.addCommentToArticle(this.article, this.commentForm.value).subscribe( response => {
      if(response.errors !== undefined){
        alert('Error when commenting');
      }
      else{
        this.commentSent.emit(this.article);
        alert('Successfully commented');
      }
    });
  }
}
