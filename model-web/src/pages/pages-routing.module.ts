
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { HomeComponent } from './home/home.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [

  {path:'', component:LoginComponent},

  {path:'home', component:HomeComponent},

  {path:'home/list-usuario', component: ListUsuarioComponent, },

  {path:'home/add-usuario', component: AddUsuarioComponent, /*canActivate:[AuthGuard]*/},

  {path:'home/edit-usuario', component: EditUsuarioComponent},

  {path:'#', component: HeaderComponent},









]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
