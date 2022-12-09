import { Component, OnInit } from '@angular/core';
import { News } from "../models/News";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../services/news.service";
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { CommentsService } from "../services/comments.service";
import { Comment } from "../models/Comment";

@Component({
  selector: 'news-page',
  templateUrl: './news-page.component.html',
})
export class NewsPageComponent implements OnInit{
  news !: News
  author !: User
  commentsLoading: boolean = false
  comments: Comment[] = []

  constructor(
    public newsService: NewsService,
    public commentsService: CommentsService,
    public userService: UserService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.loadNews(id)
    this.loadCommentsByNewsId(id)
  }

  loadNews(id: number) {
    this.newsService.getNewsById(id)
      .subscribe({
        next: (data: News) => {
          this.news = data
          this.loadAuthorById(this.news.userId)
        },
        error: alert
      })
  }

  loadCommentsByNewsId(id: number) {
    this.commentsLoading = true
    this.commentsService.getCommentsByPostId(id)
      .subscribe({
        next: (comments: Comment[]) => this.comments = comments,
        error: alert,
        complete: () => this.commentsLoading = false
      })
  }

  loadAuthorById(id: number) {
    this.userService.getUserById(id)
      .subscribe({
        next: (data: User) => this.author = data,
        error: alert
      })
  }
}
