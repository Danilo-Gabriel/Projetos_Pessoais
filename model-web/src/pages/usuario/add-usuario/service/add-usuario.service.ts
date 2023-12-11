import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Usuario } from '../../dto/DadosUsuario';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AddUsuarioService {

constructor(

  private http : HttpClient,
  //private dialog: MatDialog,
  private router : Router,
  private message : AppMessageService,
  private location : Location

  ) {


}

private backendURL = environment.endPoint;
private readonly API = `${this.backendURL}/usuarios/cadastrar`
private readonly buscardDadosUsuarioID = `${this.backendURL}/usuarios`

save(record: Usuario ){

  return this.http.post<Usuario>(this.API, record)
  .subscribe(
    (response) => {
      this.message.showSuccess(`Usuario: ${response.login} cadastrado`),
      this.location.back();
     // this.router.navigate(['/pages/home/list-usuario']);
      //this.onAviso(response)
  },
  (error) => {
    this.message.showError(error.error);
    //this.onAviso(error.error)
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
