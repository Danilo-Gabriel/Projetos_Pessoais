
import { Injectable } from '@angular/core';
import { DadosLogin } from 'src/pages/login/login/dto/DadosLogin';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any = localStorage;
  //private storage: any = sessionStorage;

constructor() { }



armazenarLoginUser(dados : DadosLogin){

 this.storage.setItem('usuario-logado', dados);


}

validarLoginUser(key : string) {

  let isUsuarioLogado = this.storage.getItem(key)

  return isUsuarioLogado!=null;
}

removerLoginUser(){

  this.storage.removeItem('usuario-logado')
  this.storage.clear();
}

returnLoginUser(){

  let usuario : any = this.storage.getItem('usuario-logado')
  return JSON.parse(usuario);
}




}
