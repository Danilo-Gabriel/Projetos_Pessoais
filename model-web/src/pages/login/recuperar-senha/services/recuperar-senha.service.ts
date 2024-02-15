import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment/environment';
import { Usuario } from 'src/pages/usuario/dto/DadosUsuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { DadosAlterarSenha } from '../dto/DadosAlterarSenha';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  private backendURL = environment.endPoint;
  private readonly validarHash = `${this.backendURL}/auth`
  private readonly alterarSenhaHash = `${this.backendURL}/auth/recuperarSenha`


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
        this.messagem.showError("Hash inválido")
      }, 2000)
      return of(error);
    })
  );
}


alterarSenhaUsuario(record : DadosAlterarSenha){

  debugger
  console.log(record)
  this.http.put<DadosAlterarSenha>(this.alterarSenhaHash, record).subscribe(
    (response) => {
      debugger
      this.messagem.showSuccess("Senhas alteradas com sucesso!");
      this.router.navigate(['pages']);
    },
    (error) => {
      this.messagem.showError(`${error.error}`);
    }
  )

}


}
