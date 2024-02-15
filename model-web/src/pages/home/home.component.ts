
import { Component, OnInit, computed, signal} from '@angular/core';
import { LoginService } from '../login/login/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



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



