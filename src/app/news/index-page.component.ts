import { Component } from '@angular/core';
import { NewsService } from "../services/news.service";
import { News } from "../models/News";
import { INewsList } from "../interfaces/INewsList";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'news-list-page',
  templateUrl: 'index-page.component.html',
})
export class NewsIndexComponent{
  news: News[] = []
  total: number = 0
  currentPage: number = 1
  itemsOnPage: number = 10
  isLoading: boolean = false

  private querySubscription: Subscription

  constructor(
    public newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentPage = +route.snapshot.queryParams['page'] || 1;
    this.querySubscription = route.queryParams.subscribe(queryParam => {
      this.currentPage = +queryParam['page'] || 1
      this.loadNewsList()
    });
  }

  loadNewsList() {
    this.isLoading = true
    this.newsService.getNewsList(this.currentPage, this.itemsOnPage)
      .subscribe({
        next: (list: INewsList) => ({news: this.news, total: this.total} = list),
        error: error => console.log('My test error', error),
        complete: () => this.isLoading = false
      })
  }

  navigateTo(page: number) {
    this.router.navigate(
      ['/news'],
      {
        queryParams: {
          page
        }
      }
    );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
