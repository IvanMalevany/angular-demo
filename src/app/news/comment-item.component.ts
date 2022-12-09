import { Component, Input } from '@angular/core';
import { Comment } from "../models/Comment";

@Component({
  selector: 'comment-item',
  host: {'class': 'comment-item'},
  template: `
    <div class="comment-item__body">{{ comment.body }}</div>
    <div class="comment-item__name">{{ comment.name }}</div>
  `
})
export class CommentItemComponent{
  @Input() comment !: Comment;
}
