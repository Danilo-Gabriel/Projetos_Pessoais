import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { first, tap } from 'rxjs';
import { Usuario } from '../../dto/DadosUsuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class ListUsuarioService {

// private readonly API = '/assets/cursos.json';

backendURL = environment.endPoint;

private readonly API = `${this.backendURL}/usuarios/list;`

private readonly DEL = `${this.backendURL}/usuarios/deletar`

constructor(
  private http: HttpClient,
  private message : AppMessageService) { }

list() {

  return this.http.get<Usuario[]>(this.API)
  .pipe(
    first(),
    tap(usuarios => console.log(usuarios))
    //tap(usuarios => this.message.showInfo(`${usuarios.length} usuarios listados`))
  );


}


    obterUsuario() {
        return this.http.get<Usuario[]>(this.API)
    }


  deletarUsuario(id : string){

      this.http.delete(`${this.DEL}/${id}`)
      .subscribe(
        (response) => {

         // this.message.showWarn(`Usuario: ${response} deletado`)

        },
        (error) => {
          this.message.showError(`${error.error}`)
        }
      )
  }
}
