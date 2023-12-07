import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/services/login.service';
import { LocalStorageService } from 'src/shared/components/services/localStorage/localStorage.service';
import { Usuario } from '../usuario/dto/detalhamentoUsuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;


  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private service : LoginService,
    private localStorageService : LocalStorageService
  ){

  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              //this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
             // this.delete();
          }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
  ];

  }

  logout(){

    this.service.logout(false);
  }



  buscarID(){

    debugger

     let dados : Usuario = this.localStorageService.dadosUsuarioLogado()


  }

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

}
