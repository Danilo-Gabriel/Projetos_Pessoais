import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {  Usuario } from '../dto/DadosUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUsuarioService } from './service/list-usuario.service';
import { LoginService } from 'src/pages/componentes/login/login/services/login.service';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss'],
  providers: [ConfirmationService]
})
export class ListUsuarioComponent implements OnInit {

  listUser! : Usuario[];
  listUsuario$: Observable<Usuario[]>;


constructor(
  private service: ListUsuarioService,
  private router: Router,
  private route : ActivatedRoute,
  private message : AppMessageService,
  private confirmationService: ConfirmationService,
  ){





  this.listUsuario$= this.service.list()
  .pipe(
    catchError(error => {
      this.message.showError(error)
      return of([])
    })
  );


}

traduzirSituacao(situacao : boolean) : string{

  return situacao ? 'ativo' : 'inativo';
}

ngOnInit(): void {

    this.obterDadosUsuario();

}


onAdd(){

  this.router.navigate(['new'], {relativeTo : this.route})

}

onEdit(usuario: Usuario){

  this.router.navigate([`edit/${usuario.id}`], {relativeTo : this.route})
}

/*
onDelete(usuario : Usuario){[

 //this.router.navigate([`remover/${usuario.id}`], {relativeTo : this.route})
   this.service.deletarUsuario(`${usuario.id}`)
]}

*/


confirmDeleteUser(event: Event, usuario : Usuario) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir usuário? ',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.deletarUsuario(`${usuario.id}`)
          this.message.showInfo("Usuario Excluido")
          window.location.reload();
      },
      reject: () => {
          this.message.showError("You have rejected")
      }
})
}


    private obterDadosUsuario() {
        this.service.obterUsuario().subscribe(
            data => {
              console.log(this.listUser)
                this.listUser = data;
            },
            error =>{
                console.error('ERROR', error);
            }
        )
    }
}
