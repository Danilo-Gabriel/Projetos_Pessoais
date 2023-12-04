import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Login } from '../dto/detalhamentoLogin';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendUrl = environment.endPoint;

  private readonly apiUrl = `${this.backendUrl}/auth/login`;

  constructor(
    private http : HttpClient,
    private router : Router,
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



  login(record : Login){

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
