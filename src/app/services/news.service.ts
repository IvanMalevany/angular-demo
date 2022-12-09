import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { News } from "../models/News";
import { ErrorHandler } from "../Errors/ErrorHandler";
import { INewsList } from "../interfaces/INewsList";
import { UserService } from "./user.service";

@Injectable()
export class NewsService {

  errorMessage: string = ''

  constructor(private http: HttpClient, private userService: UserService) {}

  getNewsList(page: number, limit: number): Observable<INewsList> {
    const offset = (page - 1) * limit
    const params = new HttpParams()
      .set('_start', offset)
      .set('_limit', limit);

    return this.http.get('https://jsonplaceholder.typicode.com/posts', { params, observe: 'response' })
      .pipe(
        map((response: any) => {
          const total: number = +response.headers.get('x-total-count')
          const news = (Array.isArray(response.body) && response.body || []).map(News.from)
          return { news, total }
        }),
        catchError(e => {
          this.errorMessage = ErrorHandler.getMessage(e)
          return [];
        })
      );
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        map(News.from),
        catchError(e => {
          this.errorMessage = ErrorHandler.getMessage(e)
          return [];
        })
      );
  }

  create(form: {title: string, body: string, area: number, conditions_agree: boolean}): Observable<number> {
    // this.userService.getUserProfile()  - get user profile to identity news author
    // emulate creating news
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(Date.now());
        subscriber.complete()
      }, 500)
    });
  }
}
