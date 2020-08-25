import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    SigninComponent,
    ErrorPageComponent,
    ArticlesListComponent,
    CommentsListComponent,
    CommentFormComponent,
    ArticleFormComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    HttpClientModule
>>>>>>> 158c94a568601dbc0be93977922514c4c4f7887f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
