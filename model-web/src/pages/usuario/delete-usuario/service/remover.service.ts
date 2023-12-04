import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoverService {

constructor(
  private http : HttpClient
) { }

private backendURL = environment.endPoint;
private readonly API = `${this.backendURL}/usuarios/deletar`



deletarUsuario(id : string){
  
}


buscarID(id : string){

  return this.http.get<any>(`${this.API}/${id}`)
}

}
