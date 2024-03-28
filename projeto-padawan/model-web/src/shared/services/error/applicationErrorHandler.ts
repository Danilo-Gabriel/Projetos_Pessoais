import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AppMessageService } from '../app-message/app-message.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage/localStorage.service';


@Injectable()
export class applicationErrorHandler implements HttpInterceptor {

  constructor(
    private message : AppMessageService,
    private router : Router,
    private storage : LocalStorageService
  ) {

   }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        /*
          implementar verificação de token em cada requisição
            if(error.headers) {
              let unauthorized = false;
            }
        */

        switch(error.status) {

          case 401 :
            this.message.showError("Login expirado! Realize o login novamente");
           // this.storage.removerLoginUser();
            break;

          case 403 :
            this.message.showError("Acesso negado, sem permissão de acesso!");
            this.router.navigate(['/pages/home'])
            break;
          default:


        }

        return throwError(error);
      })
    );
  }


}


