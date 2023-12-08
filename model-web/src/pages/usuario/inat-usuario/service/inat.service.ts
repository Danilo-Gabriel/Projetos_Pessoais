import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Usuario } from '../../dto/detalhamentoUsuario';
import { TrocarSenhaUsuario } from '../../dto/trocarSenhaUsuario';
import { MessageService } from 'primeng/api';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class InatService {

  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/auth/atualizarSenha`


  /*
  atualizar(record: Usuario ){

    return this.http.put<Usuario>(this.API, record)
    .subscribe(
      (response) => {
      this.message.showSuccess("Usuario Atualizado");
     // this.router.navigate(['/pages/home/list-usuario']);
      this.location.back();
    },
    (error) => {
       this.message.showError(error.message)
      //this.onAviso(error.error);

    }
  );
  }

  */

    constructor(
      private http : HttpClient,
      private message : AppMessageService

    ) { }


    trocarSenha(record : TrocarSenhaUsuario){

      this.http.put<TrocarSenhaUsuario>(this.API, record)
      .subscribe(
        (response => {
          this.message.showSuccess(`${response}`)
        }),
        (error => {
          this.message.showError(`${error}`)
        })
      )

    }






}
