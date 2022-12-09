import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from "../Errors/ErrorHandler";
import { Comment } from "../models/Comment";

@Injectable()
export class CommentsService {

  errorMessage: string = ''

  constructor(private http: HttpClient) {}

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .pipe(
        map((response: any) => (Array.isArray(response) && response || []).map(Comment.from)),
        catchError(e => {
          this.errorMessage = ErrorHandler.getMessage(e)
          return [];
        })
      );
  }
}
