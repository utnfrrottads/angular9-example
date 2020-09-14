import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/article';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {

  tags: string[] = [];
  filteredTags: Observable<string[]>;
  selectedTags: string[] = [];

  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    tagList: new FormControl('')
  },
  [this.notEmptySelectedTags()]
  );

  mode: string;
  article: Article;

  modeSubscription: Subscription;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) { }

  notEmptySelectedTags(){
    return (control: AbstractControl) => {
      if (this.selectedTags.length === 0){
        return {EmptySelectedTags: true};
      }
      return null;
    };
  }

  ngOnInit(): void {
    this.modeSubscription = this.route.params.subscribe( params => this.mode = params.mode);
    this.autocompleteTags();

    switch (this.mode){
      case 'update':
        this.articleForm.get('tagList').disable();
        this.article = this.articleService.getArticle();
        if (this.article !== undefined){
          this.articleForm.patchValue(this.article);
          this.selectedTags = this.article.tagList;
        }
        break;
      case 'create':
        break;
      default:
        this.router.navigate(['error']);
    }

  }

  saveArticle(){
    switch (this.mode){
      case 'update':
        this.updateArticle();
        break;
      case 'create':
        this.createArticle();
        break;
    }
  }

  ngOnDestroy(){
    this.modeSubscription.unsubscribe();
  }

  createArticle(){
    const article: Article = this.articleForm.value;
    article.tagList = this.selectedTags;

    this.http.createArticle(article).subscribe(response => {
      if (response.errors !== undefined){
        alert('Error when creating article');
      }
      else{
        alert('Article successfully created');
        this.router.navigate(['home/myArticles/1']);
      }
    });
  }

  updateArticle(){
    Object.assign(this.article, this.articleForm.value);
    this.article.tagList = this.selectedTags;

    this.http.updateArticle(this.article).subscribe( response => {
      if (response.errors !== undefined){
        alert('Error when updating article');
      }
      else{
        alert('Article successfully updated');
        this.router.navigate(['home/myArticles/1']);
      }
    });
  }


  private autocompleteTags(){
    this.http.getAllTags().subscribe( response => this.tags = response.tags);

    this.filteredTags = this.articleForm.get('tagList').valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(tag =>
      tag.toLowerCase().indexOf(filterValue) === 0  &&  this.selectedTags.indexOf(tag) === -1
    );
  }

  selectTag(tag: string){
    this.selectedTags.push(tag);
    this.articleForm.patchValue({tagList: ''});
  }

  deselectTag(tag: string){
    const index = this.selectedTags.indexOf(tag);
    this.selectedTags.splice(index, 1);
  }

}
