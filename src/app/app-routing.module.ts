import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlePageComponent } from './article-page/article-page.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'home', component: HomePageComponent},
  {path:'login', component: SigninComponent},
  {path:'register', component: SignupComponent},
  {path:'editor/:update', component: ArticleFormComponent},
  {path:'editor/:create', component: ArticleFormComponent},
  {path:'editor', component: ArticleFormComponent},
  {path:'article', component: ArticlePageComponent},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
