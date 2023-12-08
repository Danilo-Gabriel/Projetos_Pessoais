
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any = localStorage;
  // private storage: any = sessionStorage;

constructor(
) {

}



guardaDadosLogin(dados : string){

  this.storage.setItem('usuario-logado', dados);


}

ckeckUser(dados : string) {

  let isUsuarioLogado = this.storage.getItem(dados)

  return isUsuarioLogado!=null;
}

removerDadosLogin(){
  this.storage.removeItem('usuario-logado')
  this.storage.clear();
}

dadosUsuarioLogado(){

  let usuario : any = this.storage.getItem('usuario-logado')

  return usuario;
}

}
