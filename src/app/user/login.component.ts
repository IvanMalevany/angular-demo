import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'login-page',
  template: `
    <div class="page login">
      <div class="page__title">Login</div>

      <div class="form__item">
        <label class="form__label">Password (any symbols)</label>
        <input
          type="text"
          class="form__control"
          name="login"
          [(ngModel)]="password"
          #name="ngModel"
          required
        />
        <div class="form__error" [hidden]="name.valid || name.untouched">
          The password is required
        </div>
        <div class="form__item">
          <button [disabled]="name.invalid" class="btn btn-default" (click)="submit()">Submit</button>
        </div>
      </div>

    </div>
  `,
})
export class LoginPageComponent {

  password: string = ''

  constructor(private router: Router, private route: ActivatedRoute, public userService: UserService) {}

  submit() {
    this.userService.createLoginSession()
    const redirectTo = decodeURIComponent(this.route.snapshot.queryParams['redirect'] || '');
    this.router.navigate([`/${redirectTo}`]);
  }
}
