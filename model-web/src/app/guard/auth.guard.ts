import { LoginService } from './../../pages/login/services/login.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService : LoginService,
    private route : Router,
    private message : AppMessageService,
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      if (this.loginService.isAutenticado()){

        return true;

      }else{

        this.route.navigate(['pages']);
        this.message.showInfo("Usuario não autenticado")
        return false;

      }

  }

};
