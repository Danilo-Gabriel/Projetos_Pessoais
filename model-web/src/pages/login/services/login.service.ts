import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { DadosLogin } from '../dto/DadosLogin';
import { LocalStorageService } from 'src/shared/components/services/localStorage/localStorage.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendUrl = environment.endPoint;

  private readonly apiUrl = `${this.backendUrl}/auth/login`;

  constructor(
    private http : HttpClient,
    private router : Router,
    private message : AppMessageService,
    private storage : LocalStorageService

  )
  { }


  efetuarLogout(){

    this.router.navigate([ '/pages']),
    this.storage.removerLoginUser();


  }


  isAutenticado(){

     return this.storage.validarLoginUser("usuario-logado");

  }




  efetuarLogin(record : DadosLogin){

    this.http.post<DadosLogin>(this.apiUrl, record, { responseType: 'text' as 'json'})
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


}
