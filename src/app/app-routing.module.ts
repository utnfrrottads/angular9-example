import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: UserComponent },
  { path: 'signup', component: UserSignupComponent},
  { path: 'articles', component: ArticleListComponent },
  { path: 'article/:slug', component: CommentComponent },
  { path: 'editArticle/:slug', component: ArticleFormComponent },
  { path: 'newArticle', component: ArticleFormComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
