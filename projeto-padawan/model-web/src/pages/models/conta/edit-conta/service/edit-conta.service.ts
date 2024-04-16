import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../../dto/Conta';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { Location } from '@angular/common';
import { Usuario } from 'src/pages/models/usuario/dto/DadosUsuario';
import { Observable, catchError, first, map, tap } from 'rxjs';
import { AssociarUsuario } from './associar-usuario/AssociarUsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class EditContaService {


  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/conta/atualizar`
  private readonly buscarDados = `${this.backendURL}/conta`
  private readonly buscarDadosUsuario = `${this.backendURL}/usuario/list`
  private readonly UrlUsuario = `${this.backendURL}/conta/associarConta`


constructor(
  private http : HttpClient,
  private message : AppMessageService,
  private location : Location
) { }


atualizarDadosConta(record: Conta ){
 
  return this.http.put<Conta>(this.API, record, {responseType: 'json'})
  .subscribe(
    (response) => {

    this.message.showSuccess("Usuário alterado com sucesso");
    this.location.back()

  },
  (error) => {
     this.message.showError(error.error)


  }
);

}

associarUsuario(record : AssociarUsuario){
console.log(record)
 debugger
    return this.http.put<AssociarUsuario>(this.UrlUsuario, record).pipe(
    catchError(error => {
      throw 'Error em associar usuário' + this.message.showError(error.error);
    })
  )


}

buscarDadosConta(id : string){
  return this.http.get<Conta>(`${this.buscarDados}/${id}`)
}


     obterUsuario() {
         return this.http.get<Usuario[]>(this.buscarDadosUsuario)
     }


     list(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.buscarDadosUsuario}`).pipe(
        catchError(error => {
          throw 'Error fetching users: ' + 
          this.message.showError(error.error);
        })
      );

    }

}
