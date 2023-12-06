import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Usuario } from '../../dto/detalhamentoUsuario';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EditUsuarioService {

  constructor(

    private http : HttpClient,
    private message : AppMessageService,
    private router : Router,
    private location : Location

    ) {


  }

  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/usuarios/atualizar`
  private readonly buscardDadosUsuarioID = `${this.backendURL}/usuarios`

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

  buscarID(id : string){

    return this.http.get<Usuario>(`${this.buscardDadosUsuarioID}/${id}`)
  }


  /*
  onAviso(avisoMsg: string)
  {
   this.dialog.open(ErrorDialogComponent, {
    data: avisoMsg
   });
  }
  */


  }
