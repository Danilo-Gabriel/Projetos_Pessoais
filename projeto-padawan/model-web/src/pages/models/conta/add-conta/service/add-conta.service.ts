import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { Conta } from '../../dto/Conta';


@Injectable({
  providedIn: 'root'
})
export class AddContaService {


  constructor(

  private http : HttpClient,
  private router : Router,
  private message : AppMessageService,
 // private location : Location

  ) {


}

private backendURL = environment.endPoint;
private readonly API = `${this.backendURL}/conta/registrar`
private readonly buscardDadosUsuarioID = `${this.backendURL}/conta`

save(record: Conta ){

  debugger
  return this.http.post<Conta>(this.API, record)
  .subscribe(
    (response) => {
      this.message.showSuccess(`Criado com sucesso.`)
     // this.location.back();
     // this.router.navigate(['/pages/home/list-usuario']);
      //this.onAviso(response)
  },
  (error) => {
    this.message.showError(error.error);
    //this.onAviso(error.error)
  }
);
}


listarUsuario(){

  //return this.http.get<Conta>(`${this.buscardDadosUsuarioID}/${id}`)
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
