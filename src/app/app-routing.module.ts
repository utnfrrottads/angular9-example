import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'article/:slug', component: CommentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
