import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TrocarSenhaUsuario } from '../../dto/trocarSenhaUsuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';


@Injectable({
  providedIn: 'root'
})
export class TrocarSenhaService {

  private backendURL = environment.endPoint;
  private readonly buscardDadosUsuarioID = `${this.backendURL}/usuarios`
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


    trocarSenha(record : TrocarSenhaUsuario) {

      debugger
      console.log(record);
      this.http.put<TrocarSenhaUsuario>(this.API, record)
      .subscribe(
        (response => {
          this.message.showSuccess(`Usuário Atualizado`)
        }),
        (error => {
          this.message.showError(`${error.error}`)
        })
      )

    }


}
