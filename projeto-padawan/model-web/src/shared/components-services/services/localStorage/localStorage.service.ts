
import { Injectable } from '@angular/core';
import { DadosLogin } from 'src/pages/componentes/login/login/dto/DadosLogin';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any = localStorage;
  //private storage: any = sessionStorage;


constructor(
  
) { }



armazenarLoginUser(dados : DadosLogin){

  const usuarioLogado = {
    id: dados.id,
    login : dados.login,
    conta: dados.conta,
    jwt: dados.jwt
  }
 this.storage.setItem('usuario-logado', JSON.stringify(usuarioLogado));


}



validarLoginUser(key : string) {

  let isUsuarioLogado = this.storage.getItem(key)

  return isUsuarioLogado!=null;
}

removerLoginUser(){

  this.storage.removeItem('usuario-logado')
  this.storage.clear();
}

returnLoginUser() : DadosLogin | null{
  const usuarioLogadoStr = localStorage.getItem('usuario-logado');
  if (usuarioLogadoStr) {
    return JSON.parse(usuarioLogadoStr) as DadosLogin;
  } else {
    return null;
  }
}




}
