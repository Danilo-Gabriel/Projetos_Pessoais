import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/pages/componentes/login/login/services/login.service';
import { LocalStorageService } from 'src/shared/services/localStorage/localStorage.service';
import { MenuService } from './service/menu.service';
import { Usuario } from 'src/pages/models/usuario/dto/DadosUsuario';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  //CATEGORIA CONTA DO USUARIO :
  formGroup!: FormGroup ;
  private dadosUser! : any;
  roles: string = '';
  conta: string = '';
  nomeUsuario : string = '';
  imageUrl : string = '';
  imageBase64 : string = '';

  //MENU E SUBMENU
  sidebarVisible: boolean = false;
  visible: boolean = false;
  showSubmenu: boolean = false;

    //Lista de Imagens


  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32': '100');





toggleSubmenu() {
  this.showSubmenu = !this.showSubmenu;
}

navigateTo(route: string) {
  this.router.navigate([route]);
}


  constructor(

    private service : LoginService,
    private menuService : MenuService,
    private storage : LocalStorageService,
    private router : Router

  ){

  }

  ngOnInit(): void {
    this.dadosUser = this.storage.returnLoginUser();
    this.roles = this.dadosUser.role
    this.conta = this.dadosUser.conta
    this.nomeUsuario = this.dadosUser.login
    // this.imageUrl = this.dadosUser.imageUrl ? this.dadosUser.imageUrl : 'https://images7.alphacoders.com/131/1319607.jpeg';
    this.imageBase64 = `data:image/png;base64, ${this.dadosUser.imageBase64}` ? this.dadosUser.imageUrl : 'https://images7.alphacoders.com/131/1319607.jpeg';
    // console.log(this.dadosUser)
    // console.log(this.imageBase64)
  this.formGroup = new FormGroup({
    conta: new FormControl<string | null>(null)
  });

  }



  efetuarlogoutTsHeader(){

    this.service.efetuarLogout();
  }


    showDialogTrocarSenha() {
        this.visible = true;
    }



}

