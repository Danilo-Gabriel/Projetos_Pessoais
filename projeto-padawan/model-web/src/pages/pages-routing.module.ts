import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RecuperarSenhaComponent } from './componentes/login/recuperar-senha/recuperar-senha.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ListContaComponent } from './models/conta/list-conta/list-conta.component';
import { AddContaComponent } from './models/conta/add-conta/add-conta.component';
import { EditContaComponent } from './models/conta/edit-conta/edit-conta.component';
import { ListUsuarioComponent } from './models/usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './models/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './models/usuario/edit-usuario/edit-usuario.component';
import { MainComponent } from './componentes/component-main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate : [AuthGuard],

  children: [
    { path: 'home',
     component: HomeComponent,
     canActivate : [AuthGuard]},
    { path: 'usuario',
     component: ListUsuarioComponent,
     canActivate : [AuthGuard]},
    { path: 'usuario/new',
     component: AddUsuarioComponent,
     canActivate : [AuthGuard]},
    { path: 'usuario/edit/:idUsuario',
     component: EditUsuarioComponent,
     canActivate : [AuthGuard], },
     { path: 'conta',
     component: ListContaComponent,
     canActivate : [AuthGuard]},
    { path: 'conta/new',
     component: AddContaComponent,
     canActivate : [AuthGuard]},
    { path: 'conta/edit/:idConta',
     component: EditContaComponent,
     canActivate : [AuthGuard], }

  ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
