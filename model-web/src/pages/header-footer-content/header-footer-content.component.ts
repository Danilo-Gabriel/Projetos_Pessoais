import { Component, Input, OnInit, Type, computed, signal } from '@angular/core';
import { LoginService } from '../login/login/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-footer-content',
  templateUrl: './header-footer-content.component.html',
  styleUrls: ['./header-footer-content.component.scss']
})
export class HeaderFooterContentComponent implements OnInit {


  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32': '100');

  sidebarVisible: boolean = false;
  visible: boolean = false;
  showSubmenu: boolean = false;


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


  }

  efetuarlogoutTsHeader(){

    this.service.efetuarLogout();
  }


    showDialogTrocarSenha() {
        this.visible = true;
    }


}

