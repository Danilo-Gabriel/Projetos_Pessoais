import { TrocarSenhaUsuario } from 'src/pages/usuario/dto/trocarSenhaUsuario';

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
import { MessageService } from 'primeng/api';
import { TrocarSenhaUsuarioComponent } from 'src/pages/usuario/trocarSenha-usuario/trocarSenha-usuario.component';









@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    AddUsuarioComponent,
    HomeComponent,
    HeaderComponent,
    TrocarSenhaUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppPrimeNGModule,
    SharedModule

  ],
  providers: [LoginService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
