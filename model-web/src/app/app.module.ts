import { SidenavModule } from './../pages/sidenav/sidenav.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListUsuarioComponent} from "../pages/usuario/list-usuario/list-usuario.component";
import {EditUsuarioComponent} from "../pages/usuario/edit-usuario/edit-usuario.component";
import {AddUsuarioComponent} from "../pages/usuario/add-usuario/add-usuario.component";
import {HomeComponent} from "../pages/home/home.component";
import { LoginService } from 'src/pages/login/services/login.service';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from 'src/pages/header/header.component';
import { SidenavComponent } from 'src/pages/sidenav/sidenav.component';






@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    AddUsuarioComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppPrimeNGModule,
    SharedModule

  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
