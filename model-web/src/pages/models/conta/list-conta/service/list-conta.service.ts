import { Injectable } from '@angular/core';
import { Conta } from '../dto/Conta';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { LocalStorageService } from 'src/shared/components-services/services/localStorage/localStorage.service';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListContaService {


  backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/conta/list`
  //private readonly DEL = `${this.backendURL}/conta/deletar`

  constructor(
    private http: HttpClient,
    private message : AppMessageService,
    private storage : LocalStorageService) { }

  list() {

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`); { headers }

     return this.http.get<Conta[]>(this.API, )
     .pipe(
       first(),
       tap(conta => console.log(conta))
       //tap(usuarios => this.message.showInfo(`${usuarios.length} usuarios listados`))
     );


   }

   obterUsuario() {
    return this.http.get<Conta[]>(this.API)
}


   /*
   deletarUsuario(id : string){

    this.http.delete(`${this.DEL}/${id}`)
    .subscribe(
      (response) => {

       // this.message.showWarn(`Usuario: ${response} deletado`)

      },
      (error) => {
        this.message.showError(`${error.error}`)
      }
    )
}
*/

}
