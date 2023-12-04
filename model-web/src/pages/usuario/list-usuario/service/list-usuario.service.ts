import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { first, tap } from 'rxjs';
import { Usuario } from '../../dto/detalhamentoUsuario';

@Injectable({
  providedIn: 'root'
})
export class ListUsuarioService {

// private readonly API = '/assets/cursos.json';

backendURL = environment.endPoint;

private readonly API = `${this.backendURL}/usuarios/list;`

constructor(public http: HttpClient) { }

list() {

  return this.http.get<Usuario[]>(this.API)
  .pipe(
    first(),
    tap(usuarios => console.log(usuarios))
  );


}


    obterUsuario() {
        return this.http.get<Usuario[]>(this.API)
    }
}
