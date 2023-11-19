import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AddUsuario } from 'src/pages/usuario/dto/add-usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private backendUrl = environment.endPoint;

  private readonly apiUrl = `${this.backendUrl}/auth/login`;

  private usuarioAutenticado : boolean = false;

  constructor(
    private http : HttpClient,
    private router : Router,
    private dialog : MatDialog
  )
  { }


  logout(dados : boolean){

    this.usuarioAutenticado = dados;
    this.router.navigate([ '/pages'])
  }


  isAutenticado(){

      return this.usuarioAutenticado;
  }


  login(record : AddUsuario){

    this.http.post<any>(this.apiUrl, record, { responseType: 'text' as 'json'})
      // .pipe(finalize(() => {}))
      .subscribe(
        (response) => {
          this.usuarioAutenticado = true;
          this.router.navigate(['pages/home']);
        },
        (error) => {
          // debugger

          console.log("error: ", error)
          this.usuarioAutenticado = false;
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
