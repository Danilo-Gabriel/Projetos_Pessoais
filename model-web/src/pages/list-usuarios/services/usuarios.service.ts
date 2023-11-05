import { environment } from './../../../environment/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private readonly API = '/assets/cursos.json';
  //private readonly API = 'http://localhost:8080/usuarios/listarUsuario';

  constructor(public httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Usuarios[]>(this.API)
    .pipe(
      first(),
      delay(600),
      tap(usuarios => console.log(usuarios))
    );


  }


}



