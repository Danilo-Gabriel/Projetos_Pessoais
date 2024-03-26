import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../../dto/Conta';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EditContaService {


  private backendURL = environment.endPoint;
  private readonly API = `${this.backendURL}/conta/atualizar`
  private readonly buscarDados = `${this.backendURL}/conta`

constructor(
  private http : HttpClient,
  private message : AppMessageService,
  private location : Location
) { }


atualizarDadosConta(record: Conta ){

  return this.http.put<Conta>(this.API, record, {responseType: 'json'})
  .subscribe(
    (response) => {

    this.message.showSuccess("Usuário alterado com sucesso");
    this.location.back()

  },
  (error) => {
     this.message.showError(error.error)


  }
);
}

buscarDadosConta(id : string){
  return this.http.get<Conta>(`${this.buscarDados}/${id}`)
}



}
