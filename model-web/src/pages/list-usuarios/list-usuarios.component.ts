import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuarios } from './model/usuarios';
import { UsuariosService } from './services/usuarios.service';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {



    listUsuario$: Observable<Usuarios[]>;

    displayedColumns = ['login', 'situacao', 'actions'];

  items: MenuItem[] | undefined;

  constructor( private listUser: UsuariosService, public dialog: MatDialog, private router: Router){

    this.listUsuario$= this.listUser.list()
    .pipe(
      catchError(error => {
        this.onAviso('Error ao carregar')
        return of([])
      })
    );



  }

  onAviso(errorMsg: string)
  {
   this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
   });
 }


  ngOnInit(): void {

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
      { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list'}
  ];

  }

  onAdd(){

    this.router.navigate(['/pages/home/add-usuario'])
  }

}
