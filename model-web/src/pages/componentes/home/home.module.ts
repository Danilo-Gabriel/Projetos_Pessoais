import { NgModule, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from 'src/shared/biblioteca-angular/primeNG.module';
import { LoginService } from '../login/login/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrimeNGModule
  ],
  declarations: []
})
export class HomeModule implements OnInit {



  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '0px' : '250px');

  sidebarVisible: boolean = false;
  visible: boolean = false;
  showSubmenu: boolean = false;


toggleSubmenu() {
  this.showSubmenu = !this.showSubmenu;
}


  constructor(

    private service : LoginService,

  ){

  }

  ngOnInit(): void {


  }

  efetuarlogoutTsHeader(){

    this.service.efetuarLogout();
  }


    showDialogTrocarSenha() {
        this.visible = true;
    }

    visibleSidebar(){
      this.sidebarVisible = true;
    }

}



