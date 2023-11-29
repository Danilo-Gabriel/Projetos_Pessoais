import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ListUsuario } from '../dto/list-usuario';
import { Router } from '@angular/router';
import { ListUsuarioService } from './service/list-usuario.service';
import { LoginService } from 'src/pages/login/services/login.service';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {

  listUser! : ListUsuario[];
  listUsuario$: Observable<ListUsuario[]>;


constructor(
  private listUsuarioService: ListUsuarioService,
  private router: Router,
 //public dialog: MatDialog,
  private loginService: LoginService,
  private message : AppMessageService){





  this.listUsuario$= this.listUsuarioService.list()
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

  this.loginService.logout(false);

}

onAdd(){

  this.router.navigate(['pages/home/add-usuario'])
}

onEdit(usuario: ListUsuario){
  this.router.navigate([`pages/home/edit-usuario/${usuario.id}`])
}

onDelete(){[
 // this.router.navigate(['pages/home/deletar-usuario'])
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
        this.listUsuarioService.obterUsuario().subscribe(
            data => {
                this.listUser = data;
            },
            error =>{
                console.error('ERROR', error);
            }
        )
    }
}
