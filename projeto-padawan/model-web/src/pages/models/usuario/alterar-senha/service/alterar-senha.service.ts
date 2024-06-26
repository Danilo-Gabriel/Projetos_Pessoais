
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { AlterarSenhaUsuario } from '../../dto/DadosAtualizaSenha';


@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  private backendURL = environment.endPoint;

  private readonly API = `${this.backendURL}/usuario/alterarSenha`


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


    trocarSenha(record : AlterarSenhaUsuario) {


      this.http.put<AlterarSenhaUsuario>(this.API, record)
      .subscribe(
        (response => {
          this.message.showSuccess(`Usuário Atualizado`)
          window.location.reload();
        }),
        (error => {
          this.message.showError(`${error.error}`)
        })
      )

    }


}
