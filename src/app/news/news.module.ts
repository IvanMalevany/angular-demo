import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { NewsIndexComponent } from "./index-page.component";
import { NewsService } from "../services/news.service";
import { NewsItemComponent } from "./news-item.component";
import { NewsPageComponent } from "./news-page.component";
import { LoaderComponent } from "../ui/loader.component";
import { UserService } from "../services/user.service";
import { PaginationComponent } from "../ui/pagination.component";
import { PaginationPipe } from "../pipes/pagination.pipe";
import { CommentsService } from "../services/comments.service";
import { CommentItemComponent } from "./comment-item.component";
import { CreateNewsPageComponent } from "./create-news-page.component";

@NgModule({
  declarations: [
    NewsIndexComponent,
    NewsItemComponent,
    NewsPageComponent,
    LoaderComponent,
    PaginationComponent,
    PaginationPipe,
    CommentItemComponent,
    CreateNewsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ NewsIndexComponent ],
  providers: [ NewsService, UserService, CommentsService ]
})
export class NewsModule { }
