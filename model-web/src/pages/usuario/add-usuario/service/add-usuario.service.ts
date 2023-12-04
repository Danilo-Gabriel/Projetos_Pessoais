import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AddUsuario} from '../../dto/add-usuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class AddUsuarioService {

constructor(

  private http : HttpClient,
  //private dialog: MatDialog,
  private router : Router,
  private message : AppMessageService

  ) {


}

private backendURL = environment.endPoint;
private readonly API = `${this.backendURL}/usuarios/cadastrar`

save(record: AddUsuario ){

  return this.http.post<AddUsuario>(this.API, record)
  .subscribe(
    (response) => {
      this.message.showSuccess(`Usuario: ${response.login} cadastrado`),
      this.router.navigate(['/pages/home/list-usuario']);
      //this.onAviso(response)
  },
  (error) => {
    this.message.showError(error.error);
    //this.onAviso(error.error)
  }
);
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
