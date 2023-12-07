
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';


const routes: Routes = [

  {path:'', component:LoginComponent,

  },

  {
    path:'home', component:HomeComponent,
    canActivate:[AuthGuard]
  },


  {
    path:'home/usuario', component: ListUsuarioComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'home/usuario/new', component: AddUsuarioComponent,
    canActivate:[AuthGuard]
  },


  {
    path:'home/usuario/edit/:idUsuario', component: EditUsuarioComponent,
    canActivate:[AuthGuard]
  }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
