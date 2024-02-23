import { LoginService } from '../../pages/services/login/login/services/login.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';


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

        if(state.url === '/login'){
          this.route.navigate(['/pages/home']);
          return false;
        }

        return true;

      }else{

        if(state.url === '/login'){

          return true;
        }

        this.route.navigate(['/login']);
        this.message.showInfo("Usuario não autenticado");
        return false;

      }

  }

};
