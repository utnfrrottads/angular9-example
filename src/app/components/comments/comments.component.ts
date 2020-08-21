import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() article: any;

  comments:any=[];

  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    //this.getComments();

  this.article = {
    author: {username: "Ramill", bio: "Joker", image: "https://cdn.join.chat/app/uploads/2020/01/icon-randomphone.png", following: false},
    body: "dsfsdf↵sdf↵s↵fsdafsdafsda↵↵dsf↵flex: 0 0 0px;daf↵af↵↵ff↵",
    createdAt: "2020-08-21T14:30:32.305Z",
    description: "short",
    favorited: false,
    favoritesCount: 2,
    slug: "title-43qqli",
    title: "Title",
    updatedAt: "2020-08-21T14:30:32.305Z"
  }

  this.getComments(this.article);
  

}

  //ABC comments

  //Alta
  setComment(comment,article,usr){
    

    this.service.setComment(comment,article,usr);
  }

  //Baja
  deleteComment(comment,article){}

  //Consulta
  getComments(article){

    this.comments = this.service.getComments(article)
    .subscribe((response) => {
      this.comments = response.comments;
    })

    
    console.log(this.comments);
  }
}
