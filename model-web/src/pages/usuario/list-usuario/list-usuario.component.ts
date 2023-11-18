import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { ListUsuario } from '../dto/list-usuario';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListUsuarioService } from './service/list-usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {


  listUsuario$: Observable<ListUsuario[]>;

  displayedColumns = ['login', 'situacao', 'actions'];

items: MenuItem[] | undefined;

constructor(
  private listUsuarioService: ListUsuarioService,
  private router: Router,
  public dialog: MatDialog){

  this.listUsuario$= this.listUsuarioService.list()
  .pipe(
    catchError(error => {
      this.onAviso('Error ao carregar')
      return of([])
    })
  );



}



ngOnInit(): void {

  this.items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
    { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list-usuario'}
];

}

onAdd(){

  this.router.navigate(['pages/home/add-usuario'])
}

onAviso(errorMsg: string)
{
 this.dialog.open(ErrorDialogComponent, {
  data: errorMsg
 });
}


}
