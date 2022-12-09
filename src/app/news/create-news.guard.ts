import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateNewsGuard implements CanActivate{

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogged = this.userService.isUserLogged()
    if (isLogged) return true
    this.router.navigate(['/login'], {
      queryParams: {
        redirect: encodeURIComponent(route.routeConfig?.path || '')
      }
    })
    return false
  }
}
