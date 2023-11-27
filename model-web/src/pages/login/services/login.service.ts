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

  constructor(
    private http : HttpClient,
    private router : Router,
    private dialog : MatDialog

  )
  { }


  logout(dados : boolean){

    this.router.navigate([ '/pages'])
  }


  isAutenticado(){
    let usuarioLogado: any = localStorage.getItem("usuario-logado")
    return usuarioLogado!=null;
  }



  login(record : AddUsuario){

    this.http.post<any>(this.apiUrl, record, { responseType: 'text' as 'json'})
      // .pipe(finalize(() => {}))
      .subscribe(
        (response) => {
          localStorage.setItem("usuario-logado", response)
          this.router.navigate(['pages/home']);

        },
        (error) => {
          // debugger

          console.log("error: ", error)
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
