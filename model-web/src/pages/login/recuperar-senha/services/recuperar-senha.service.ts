import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment/environment';
import { Usuario } from 'src/pages/usuario/dto/DadosUsuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  private backendURL = environment.endPoint;
  private readonly validarHash = `${this.backendURL}/auth`


constructor(
  private router : Router,
  private http : HttpClient,
  private messagem : AppMessageService

) { }


validarHashUsuario(hash: string){

  return this.http.get<Usuario>(`${this.validarHash}/${hash}`).pipe(
    catchError(error => {
      
      console.error('Erro ao validar hash de usuário:', error);
      this.messagem.showError("Hash desconhecido")
      setTimeout(() => {
        this.router.navigate(['pages']);
      }, 2000)

      return of(error);
    })
  );
}


}
