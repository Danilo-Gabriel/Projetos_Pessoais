

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListUsuarioComponent} from "../pages/usuario/list-usuario/list-usuario.component";
import {EditUsuarioComponent} from "../pages/usuario/edit-usuario/edit-usuario.component";
import {AddUsuarioComponent} from "../pages/usuario/add-usuario/add-usuario.component";
import {HomeComponent} from "../pages/home/home.component";
import { LoginService } from 'src/pages/login/login/services/login.service';
import { AuthGuard } from './guard/auth.guard';
import { MessageService } from 'primeng/api';
import { AlterarSenhaComponent } from 'src/pages/usuario/alterar-senha/alterar-senha-usuario.component';
import { LoginComponent } from 'src/pages/login/login/login.component';
import { PrimeNGModule } from 'src/shared/primeNG/primeNG.module';
import { RecuperarSenhaComponent } from 'src/pages/login/recuperar-senha/recuperar-senha.component';
import { HeaderFooterContentComponent } from 'src/pages/header-footer-content/header-footer-content.component';
import { MainComponent } from 'src/pages/main/main.component';








@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    AddUsuarioComponent,
    HomeComponent,
    AlterarSenhaComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    HeaderFooterContentComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    SharedModule

  ],
  providers: [LoginService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
