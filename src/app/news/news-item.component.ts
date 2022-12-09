import { Component, Input } from '@angular/core';
import { News } from "../models/News";

@Component({
  selector: 'news-item',
  template: `
    <div class="news-item__name">{{ news.title }}</div>
    <div class="news-item__intro">{{ news.intro }}</div>
    <div class="news-item__actions">
      <a class="btn" [routerLink]="['/news', news.id]">Read more</a>
    </div>
  `
})
export class NewsItemComponent{
  @Input() news !: News;
}
