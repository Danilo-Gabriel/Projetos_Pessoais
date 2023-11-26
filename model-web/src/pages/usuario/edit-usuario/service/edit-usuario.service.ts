import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { EditUsuario } from '../../dto/edit-usuario';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EditUsuarioService {

  constructor(

    private http : HttpClient,
    private dialog: MatDialog,
    private router : Router

    ) {


  }

  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/usuarios/atualizar`

  atualizar(record: EditUsuario ){

    return this.http.put<EditUsuario>(this.API, record)
    .subscribe(
      (response) => {
      this.onAviso("Usuario Atualizado");
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
