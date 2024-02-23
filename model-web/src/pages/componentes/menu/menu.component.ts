import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/pages/services/login/login/services/login.service';

interface City {
  perfil: string;

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  //CATEGORIA CONTA DO USUARIO :
  formGroup!: FormGroup ;
  cities: City[] | undefined;

  //MENU E SUBMENU
  sidebarVisible: boolean = false;
  visible: boolean = false;
  showSubmenu: boolean = false;

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
    private router : Router

  ){

  }

  ngOnInit(): void {
    this.cities = [
      { perfil: 'Administrador'},
      { perfil: 'Auditor' },
      { perfil: 'Convencional' }

  ];
  this.formGroup = new FormGroup({
    conta: new FormControl<City | null>(null)
  });

  }

  efetuarlogoutTsHeader(){

    this.service.efetuarLogout();
  }


    showDialogTrocarSenha() {
        this.visible = true;
    }



}

