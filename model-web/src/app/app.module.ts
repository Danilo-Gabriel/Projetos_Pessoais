import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "../pages/login/login.component";
import {ListUsuarioComponent} from "../pages/usuario/list-usuario/list-usuario.component";
import {EditUsuarioComponent} from "../pages/usuario/edit-usuario/edit-usuario.component";
import {AddUsuarioComponent} from "../pages/usuario/add-usuario/add-usuario.component";
import {HomeComponent} from "../pages/home/home.component";





@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    AddUsuarioComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppPrimeNGModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
