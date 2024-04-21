import { Usuario } from 'src/pages/models/usuario/dto/DadosUsuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { Location } from '@angular/common';
import { ReturnCadastroUser } from '../../dto/ReturnCadastroUser';

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
private readonly API = `${this.backendURL}/usuario`
private readonly buscardDadosUsuarioID = `${this.backendURL}/usuario`

saveImg(dados: Usuario, image : File ) : Observable<Usuario> {

  const formData : FormData = new FormData();
  formData.append('dados', new Blob([JSON.stringify(dados)], {
    type : 'application/json'
  }
  ));
  formData.append('image', image);
   return this.http.post<Usuario>(this.API, formData);
}



/*
  save(jsonDados: Usuario ){

  const formData : FormData = new FormData();
  formData.append('jsonDados', new Blob([JSON.stringify(jsonDados)],
  {
    type : 'application/json'
  }));
  return this.http.post<ReturnCadastroUser>(this.API, formData)
  .subscribe(
    (response) => {
      this.message.showSuccess(`${response.Resp}`),
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



*/




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
