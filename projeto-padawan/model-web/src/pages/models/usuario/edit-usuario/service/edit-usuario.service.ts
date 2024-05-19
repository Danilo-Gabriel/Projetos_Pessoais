import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { Usuario } from '../../dto/DadosUsuario';
import { Location } from '@angular/common';
import { EditUsuario } from '../../dto/DadosAtualizarLogin';
import { Observable, window } from 'rxjs';
import { LocalStorageService } from 'src/shared/services/localStorage/localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class EditUsuarioService {

  constructor(

    private http : HttpClient,
    private message : AppMessageService,
    private router : Router,
    private location : Location,


    ) {


  }

  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/usuario`
  private readonly buscarDadosUsuario = `${this.backendURL}/usuario`



  atualizarDados(dados: EditUsuario, image : File ) : Observable<Usuario>{
    const formData : FormData = new FormData();
    formData.append('dados', new Blob([JSON.stringify(dados)],{
      type: 'application/json'
    }));
    formData.append('image', image);
    return this.http.put<Usuario>(this.API, formData);
  }

  atualizarDadosUser(dados: EditUsuario) : Observable<Usuario>{
    const formData : FormData = new FormData();
    formData.append('dados', new Blob([JSON.stringify(dados)],{
      type: 'application/json'
    }));
    return this.http.put<Usuario>(this.API, formData);
  }

  buscarDadosUser(id : string){

    return this.http.get<Usuario>(`${this.buscarDadosUsuario}/${id}`)
  }


  }
