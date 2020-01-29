import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Location } from '@angular/common'
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class AuthRouteGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
 return true;

   
  }

}