
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/pages/componentes/login/login/services/login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



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



