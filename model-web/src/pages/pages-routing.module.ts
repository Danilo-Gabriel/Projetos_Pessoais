
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path:'', component:LoginComponent},

  {path:'home', component:HomeComponent},

  {path:'home/list-usuario', component: ListUsuarioComponent},

  {path:'home/add-usuario', component: AddUsuarioComponent},




]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
