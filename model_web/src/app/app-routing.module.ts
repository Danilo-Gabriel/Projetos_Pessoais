import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


//CONFIG DE ROTA (DE app.component.html para pages)
const routes: Routes = [
  {

    path:"",
    pathMatch: "full",
    redirectTo: "login"

  }
  ,

  {
    path:"login", component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
