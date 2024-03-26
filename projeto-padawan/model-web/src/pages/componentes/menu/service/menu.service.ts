import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

private backendURL = environment.endPoint;
private readonly rotaAPI = `${this.backendURL}/usuarios/cadastrar`
private readonly buscardDadosUsuarioID = `${this.backendURL}/usuarios`


constructor(
  private http : HttpClient,
  private messagem : AppMessageService
) { }



}
