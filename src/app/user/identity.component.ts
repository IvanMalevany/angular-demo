import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../models/User";

@Component({
  selector: 'user-identity',
  host: {'class': 'identity'},
  template: `
    <div *ngIf="name;else loginLink">
      {{ name }}
      <span class="logout" (click)="logout()">Logout</span>
    </div>
    <ng-template #loginLink>
      <a routerLink="/login" [routerLinkActive]="'active'" [routerLinkActiveOptions]="{exact:true}">Login</a>
    </ng-template>
  `,
})
export class IdentityComponent{

  name: string = ''

  constructor(public userService: UserService) {
    userService.userSession.subscribe({
      next: (user: User | null) => {
        this.name = user? user.name : ''
      },
      error: console.error
    })
  }

  logout() {
    this.userService.logout()
  }
}
