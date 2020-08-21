import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
  }

  //ABC comments

  //Alta
  setComment(comment,article,usr){
    

    this.service.setComment(comment,article,usr);
  }

  //Baja
  deleteComment(comment,article){}

  //Consulta
  getComments(article){}
}
