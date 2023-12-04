import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AddUsuario } from 'src/pages/usuario/dto/add-usuario';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendUrl = environment.endPoint;

  private readonly apiUrl = `${this.backendUrl}/auth/login`;

  constructor(
    private http : HttpClient,
    private router : Router,
    private route : ActivatedRoute,
    //private dialog : MatDialog,
    private messageService : AppMessageService

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
        localStorage.setItem('usuario-logado', response),
        this.messageService.showSuccess("Login Correto"),
        this.router.navigate(['/pages/home']);
        //this.onAviso(response)
      },
      (error) => {
        console.error('error: ', error),
        this.messageService.showError(error.error);
        //this.onAviso(response)
      }
    );
}



/*
 onAviso(avisoMsg: string)
 {
  this.dialog.open(ErrorDialogComponent, {
   data: avisoMsg
  });
}
*/


}
