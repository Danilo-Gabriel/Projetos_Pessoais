import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../../dto/Conta';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EditContaService {


  private backendURL = environment.endPoint;
  //private readonly API = `${this.backendURL}/conta/atualizar`
  private readonly buscarDadosConta = `${this.backendURL}/conta`

constructor(
  private http : HttpClient
) { }

buscarDadosUser(id : string){

  return this.http.get<Conta>(`${this.buscarDadosConta}/${id}`)
}



}
