

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from "../pages/componentes/home/home.component";
import { LoginService } from 'src/pages/componentes/login/login/services/login.service';
import { AuthGuard } from './guard/auth.guard';
import { MessageService } from 'primeng/api';
import { LoginComponent } from 'src/pages/componentes/login/login/login.component';
import { PrimeNGModule } from 'src/shared/biblioteca-angular/primeNG.module';
import { ListContaComponent } from 'src/pages/models/conta/list-conta/list-conta.component';
import { EditContaComponent } from 'src/pages/models/conta/edit-conta/edit-conta.component';
import { ListUsuarioComponent } from 'src/pages/models/usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from 'src/pages/models/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from 'src/pages/models/usuario/edit-usuario/edit-usuario.component';
import { AlterarSenhaComponent } from 'src/pages/models/usuario/alterar-senha/alterar-senha-usuario.component';
import { RecuperarSenhaComponent } from 'src/pages/componentes/login/recuperar-senha/recuperar-senha.component';
import { FooterComponent } from 'src/pages/componentes/footer/footer.component';
import { HeaderComponent } from 'src/pages/componentes/header/header.component';
import { MenuComponent } from 'src/pages/componentes/menu/menu.component';
import { MainComponent } from 'src/pages/componentes/component-main/main.component';
import { AllFilesComponent } from 'src/pages/componentes/files/all-files/all-files.component';
import { UploadFilesComponent } from 'src/pages/componentes/files/upload-files/upload-files.component';
import { AddContaComponent } from 'src/pages/models/conta/add-conta/add-conta.component';











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
    MenuComponent,
    ListContaComponent,
    AddUsuarioComponent,
    EditContaComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    AllFilesComponent,
    UploadFilesComponent,
    AddContaComponent,
    EditContaComponent
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
