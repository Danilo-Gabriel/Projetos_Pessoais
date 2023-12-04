import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {  Usuario } from '../dto/detalhamentoUsuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUsuarioService } from './service/list-usuario.service';
import { LoginService } from 'src/pages/login/services/login.service';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {

  listUser! : Usuario[];
  listUsuario$: Observable<Usuario[]>;


constructor(
  private service: ListUsuarioService,
  private router: Router,
  private route : ActivatedRoute,
 //public dialog: MatDialog,
  private serviceLogin: LoginService,
  private message : AppMessageService){





  this.listUsuario$= this.service.list()
  .pipe(
    catchError(error => {
      this.message.showError(error)
      return of([])
    })
  );


}


ngOnInit(): void {

    this.obterDadosUsuario();

}

logout(){

  this.serviceLogin.logout(false);

}

onAdd(){

  this.router.navigate(['new'], {relativeTo : this.route})

}

onEdit(usuario: Usuario){

  this.router.navigate([`edit/${usuario.id}`], {relativeTo : this.route})
}

onDelete(record : Usuario){[

 //this.router.navigate([`remover/${usuario.id}`], {relativeTo : this.route})
]}


/*
onAviso(errorMsg: string)
{
 this.dialog.open(ErrorDialogComponent, {
  data: errorMsg
 });
}
*/


    private obterDadosUsuario() {
        this.service.obterUsuario().subscribe(
            data => {
                this.listUser = data;
            },
            error =>{
                console.error('ERROR', error);
            }
        )
    }
}
