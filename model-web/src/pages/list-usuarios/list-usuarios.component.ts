import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {


  items: MenuItem[] | undefined;

  ngOnInit(): void {

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
      { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list'}
  ];

  }

}
