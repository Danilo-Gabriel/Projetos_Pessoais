import { AuthGuard } from 'src/app/guard/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { ListUsuario } from '../dto/list-usuario';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListUsuarioService } from './service/list-usuario.service';
import { LoginService } from 'src/pages/login/services/login.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {

  items: MenuItem[] | undefined;
  listUser! : ListUsuario[];
  listUsuario$: Observable<ListUsuario[]>;


constructor(
  private listUsuarioService: ListUsuarioService,
  private router: Router,
  public dialog: MatDialog,
  private auth: LoginService){





  this.listUsuario$= this.listUsuarioService.list()
  .pipe(
    catchError(error => {
      this.onAviso('Error ao carregar')
      return of([])
    })
  );


}


ngOnInit(): void {

    this.obterDadosUsuario();

  this.items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
    { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list-usuario'},
    { label: 'logout', icon: 'pi pi-fw pi-home', routerLink: '/pages/'},
];

}

logout(){

  this.auth.logout(false);

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

onAviso(errorMsg: string)
{
 this.dialog.open(ErrorDialogComponent, {
  data: errorMsg
 });
}


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
