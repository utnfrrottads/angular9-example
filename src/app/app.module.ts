import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommentsComponent } from './components/comments/comments.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
