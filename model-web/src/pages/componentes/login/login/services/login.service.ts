import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { LocalStorageService } from 'src/shared/components-services/services/localStorage/localStorage.service';
import { DadosLogin } from '../dto/DadosLogin';
import { DadosRecuperarSenha } from '../dto/DadosRecuperarSenha';
import { delay } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private backendUrl = environment.endPoint;

 private readonly apiUrl = `${this.backendUrl}/auth/login`;

 private readonly urlRecuperarSenha = `${this.backendUrl}/auth/recuperar-senha`;

  constructor(
    private http : HttpClient,
    private router : Router,
    private message : AppMessageService,
    private storage : LocalStorageService

  )
  { }


  efetuarLogout(){

    this.router.navigate([ '/login']),
    this.storage.removerLoginUser();


  }


  isAutenticado(){

     return this.storage.validarLoginUser("usuario-logado");

  }




  efetuarLogin(record : DadosLogin){

    this.http.post<DadosLogin>(this.apiUrl, record, {responseType: 'json'})
    .subscribe(
      (response) => {

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
