import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/componentes/login/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { RecuperarSenhaComponent } from 'src/pages/componentes/login/recuperar-senha/recuperar-senha.component';


const routes: Routes = [


  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login',
   component: LoginComponent,
   canActivate : [AuthGuard]
  },
  {path : 'recuperar-senha/:hashUsuario', component: RecuperarSenhaComponent },
  {path:'pages',
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
