import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {


  items: MenuItem[] | undefined;

  constructor() { }

  ngOnInit() {

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
      { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list-usuario'},
      { label: 'logout', icon: 'pi pi-fw pi-home', routerLink: '/pages/'},
  ];

  }

}
