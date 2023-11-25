
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[] | undefined;
  sidebarVisible: boolean = true;


  constructor(
    private router : Router,
    private service : LoginService
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


}
