import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  article: any;
  slug:any;
  private sub: any;
  comments:any=[];

  constructor(private aService: ArticlesService, private cService: CommentsService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //me traigo el slug
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.article =  this.aService.getArticleBySlug(this.slug).
    subscribe((res)=>{ 
      this.article = res.article;
      console.log(this.article)
      this.comments = this.getComments(this.article);
    });

    
    }

 

  //ABC comments

  //Alta
  setComment(comment,article,usr){
    

    //this.service.setComment(comment,article,usr);
  }

  //Baja
  deleteComment(comment,article){}

  //Consulta
  getComments(article){

    this.comments = this.cService.getComments(article)
    .subscribe((response) => {
      this.comments = response.comments;
    })

    
  }
}
