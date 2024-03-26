import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { LocalStorageService } from 'src/shared/services/localStorage/localStorage.service';
import { DadosLogin } from '../dto/DadosLogin';
import { DadosRecuperarSenha } from '../dto/DadosRecuperarSenha';
import { delay } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private backendUrl = environment.endPoint;

 private readonly apiLogin = `${this.backendUrl}/auth/login`;
 private readonly apiLogout = `${this.backendUrl}/auth/logout`;

 private readonly urlRecuperarSenha = `${this.backendUrl}/email/mensagem`;

  constructor(
    private http : HttpClient,
    private router : Router,
    private message : AppMessageService,
    private storage : LocalStorageService

  )
  { }


  efetuarLogout(){

    this.http.head(this.apiLogout)
    .subscribe(
      (response) => {

        this.storage.removerLoginUser();
        this.router.navigate([ '/login']);
      },
      (error) => {

        this.message.showError(error.error);
      }
    );





  }


  isAutenticado(){

     return this.storage.validarLoginUser("usuario-logado");

  }

  efetuarLogin(record : DadosLogin){

    this.http.post<DadosLogin>(this.apiLogin, record, {responseType: 'json'})
    .subscribe(
      (response) => {

        console.log(response)
        this.storage.armazenarLoginUser(response),
        this.message.showSuccess("Login Correto"),
        this.router.navigate(['/pages/home']);

      },
      (error) => {

        this.message.showError(error.error);

      }
    );
}



recuperarSenha(record : DadosRecuperarSenha){

    this.http.post<DadosRecuperarSenha>(this.urlRecuperarSenha, record)
    .subscribe(
      (response) => {

        this.message.showSuccess("Email enviado");
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      },
      (error) => {
        this.message.showError(error.error);
      }
    )

}


}
