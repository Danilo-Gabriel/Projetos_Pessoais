
import { Injectable } from '@angular/core';
import { DadosUsuarioLogado } from 'src/pages/usuario/dto/dadosUsuarioLogado';
import { Usuario } from 'src/pages/usuario/dto/detalhamentoUsuario';
import { TrocarSenhaUsuario } from 'src/pages/usuario/dto/trocarSenhaUsuario';
import { __values } from 'tslib';

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

dadosUsuarioLogado() : string{

  let usuario : any = this.storage.getItem('usuario-logado')
  return JSON.parse(usuario);
}




}
