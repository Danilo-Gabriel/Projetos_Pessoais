import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Usuario } from '../../dto/DadosUsuario';
import { Location } from '@angular/common';
import { EditUsuario } from '../../dto/DadosAtualizarLogin';

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

  atualizar(record: EditUsuario ){

    return this.http.put<Usuario>(this.API, record)
    .subscribe(
      (response) => {
      this.message.showSuccess("Login Alterado com Sucesso");

      this.location.back();
    },
    (error) => {
       this.message.showError(error.error)


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
