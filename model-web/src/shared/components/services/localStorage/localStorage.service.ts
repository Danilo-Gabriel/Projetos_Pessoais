
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

constructor() { }



guardaDadosLogin(dados : string){

  localStorage.setItem('usuario-logado', dados);


}

ckeckUser(dados : string) {

  let isUsuarioLogado = localStorage.getItem(dados)

  return isUsuarioLogado!=null;
}

removerDadosLogin(){
  localStorage.removeItem('usuario-logado')
  localStorage.clear;
}

dadosUsuarioLogado(){

  let usuario : any = localStorage.getItem('usuario-logado')

  return usuario;
}

}
