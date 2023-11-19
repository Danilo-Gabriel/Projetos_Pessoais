import { LoginService } from './../../pages/login/services/login.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService : LoginService,
    private route : Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      if (this.authService.isAutenticado()){

        return true;

      }

       this.route.navigate(['pages']);
       return false;
  }

};
