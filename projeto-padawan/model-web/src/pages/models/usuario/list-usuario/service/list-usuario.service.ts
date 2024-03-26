import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { first, tap } from 'rxjs';
import { Usuario } from '../../dto/DadosUsuario';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { LocalStorageService } from 'src/shared/services/localStorage/localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class ListUsuarioService {

// private readonly API = '/assets/cursos.json';

//  JWT


private readonly token : any = localStorage.getItem('usuario-logado');


backendURL = environment.endPoint;

private readonly API = `${this.backendURL}/usuario/list`

private readonly DEL = `${this.backendURL}/usuario/deletar`

constructor(
  private http: HttpClient,
  private message : AppMessageService,
  private storage : LocalStorageService) { }

list() {

 // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`); { headers }

  return this.http.get<Usuario[]>(this.API, )
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
