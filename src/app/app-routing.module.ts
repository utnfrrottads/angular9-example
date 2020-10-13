import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
{path: 'home', component: ArticlesComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'article', component: ArticleComponent},
{path: 'article/:slug', component: ArticleComponent},
{path: 'article/comments/:slug', component: CommentsComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
