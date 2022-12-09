import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from "./user/login.component";
import { IdentityComponent } from "./user/identity.component";
import { IndexPageComponent } from "./index/index-page.component";

import { NewsModule } from "./news/news.module";
import { CreateNewsGuard } from "./news/create-news.guard";

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewsModule,
    FormsModule
  ],
  providers: [CreateNewsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
