import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AddUsuario } from 'src/pages/usuario/dto/add-usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendUrl = environment.endPoint;

  private readonly apiUrl = `${this.backendUrl}/auth/login`;

  constructor(
    private http : HttpClient,
    private router : Router,
    private dialog : MatDialog,
    private messageService : MessageService

  )
  { }


  logout(dados : boolean){

    this.router.navigate([ '/pages'])
  }


  isAutenticado(){
    let usuarioLogado: any = localStorage.getItem("usuario-logado")
    return usuarioLogado!=null;
  }



  login(record : AddUsuario){

    this.http.post<any>(this.apiUrl, record, { responseType: 'text' as 'json'})
    .subscribe(
      (response) => {
        localStorage.setItem('usuario-logado', response);
        //this.messageService.add({
        //  severity: 'success',
        //  summary: 'Sucesso',
        //  detail: response
        //  });

       this.router.navigate(['/pages/home']);
      },
      (error) => {
        console.error('error: ', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: error.error
        });

      }
    );
}



 onAviso(avisoMsg: string)
 {
  this.dialog.open(ErrorDialogComponent, {
   data: avisoMsg
  });
}


  }
