import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AppMessageService } from '../app-message/app-message.service';


@Injectable()
export class applicationErrorHandler implements HttpInterceptor {

  constructor(
    private message : AppMessageService
  ) {

   }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {

          this.message.showError("Acesso negado, sem permissão de acesso!");

        }
        return throwError(error);
      })
    );
  }

  
}

 
