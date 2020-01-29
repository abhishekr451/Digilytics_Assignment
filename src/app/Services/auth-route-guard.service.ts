import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";


@Injectable()
export class AuthRouteGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.getItem('token') === "1") {
      return true
    }
    else {
      this.router.navigate(['login'])
    }
  }

}