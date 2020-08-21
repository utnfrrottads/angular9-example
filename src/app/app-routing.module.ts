import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CommentsComponent } from './components/comments/comments.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent},
  { path: 'article/:slug', component: CommentsComponent},
  { path:'', redirectTo:'articles', pathMatch: 'full'},
  { path:'**',redirectTo:'articles'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
