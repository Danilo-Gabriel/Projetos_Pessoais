import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { EditUsuario } from '../../dto/edit-usuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class EditUsuarioService {

  constructor(

    private http : HttpClient,
    private message : AppMessageService,
    //private dialog: MatDialog,
    private router : Router

    ) {


  }

  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/usuarios/atualizar`

  atualizar(record: EditUsuario ){

    return this.http.put<EditUsuario>(this.API, record)
    .subscribe(
      (response) => {
      this.message.showSuccess("Usuario Atualizado");
     // this.router.navigate(['/pages/home/list-usuario']);
    },
    (error) => {
       this.message.showError(error.message)
      //this.onAviso(error.error);

    }
  );
  }

  buscarID(id : string){

    return this.http.get<EditUsuario>(`${this.API}/${id}`)
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
