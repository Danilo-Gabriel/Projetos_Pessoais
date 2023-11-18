import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AddUsuario} from '../../dto/add-usuario';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AddUsuarioService {

constructor(

  private http : HttpClient,
  private dialog: MatDialog,
  private router : Router

  ) {


}

private backendURL = environment.endPoint;
private readonly API = `${this.backendURL}/usuarios/cadastrar`

save(record: AddUsuario ){

  return this.http.post<AddUsuario>(this.API, record)
  .subscribe(
    (response) => {
    this.onAviso("Usuario Cadastrado");
     this.router.navigate(['/pages/home/list']);
  },
  (error) => {
    this.onAviso(error.error);
  }
);
}


onAviso(avisoMsg: string)
{
 this.dialog.open(ErrorDialogComponent, {
  data: avisoMsg
 });
}


}
