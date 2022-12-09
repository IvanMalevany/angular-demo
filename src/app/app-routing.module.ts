import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from "./index/index-page.component";
import { NewsIndexComponent } from "./news/index-page.component";
import { NewsPageComponent } from "./news/news-page.component";
import { CreateNewsPageComponent } from "./news/create-news-page.component";
import { CreateNewsGuard } from "./news/create-news.guard";
import { LoginPageComponent } from "./user/login.component";

const routes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'news', component: NewsIndexComponent },
  { path: 'news/create', component: CreateNewsPageComponent, canActivate: [CreateNewsGuard] },
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
