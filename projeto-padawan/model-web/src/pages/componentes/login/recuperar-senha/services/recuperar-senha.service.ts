import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { DadosAlterarSenha } from '../dto/DadosAlterarSenha';
import { Usuario } from 'src/pages/models/usuario/dto/DadosUsuario';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  private backendURL = environment.endPoint;
  private readonly validarHash = `${this.backendURL}/public`
  private readonly alterarSenhaHash = `${this.backendURL}/public/recuperarSenha`


constructor(
  private router : Router,
  private http : HttpClient,
  private messagem : AppMessageService

) { }


validarHashUsuario(hash: string){

  return this.http.get<Usuario>(`${this.validarHash}/${hash}`).pipe(
    catchError(error => {
      console.error('Erro ao validar hash de usuário:', error);
      this.router.navigate(['login']);
      setTimeout(() => {
        this.messagem.showError(error.error)
      }, 2000)
      return of(error);
    })
  );
}


alterarSenhaUsuario(record : DadosAlterarSenha){

  //debugger
  console.log(record)
  this.http.put<DadosAlterarSenha>(this.alterarSenhaHash, record).subscribe(
    (response) => {
      //debugger
      this.messagem.showSuccess("Senhas alteradas com sucesso!");
      this.router.navigate(['login']);
    },
    (error) => {
      this.messagem.showError(`${error.error}`);
    }
  )

}


}
