import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';
import { InatAtivUsuarioComponent } from './inat-ativ-usuario/inat-ativ-usuario.component';




@NgModule({
  imports: [
    CommonModule,
    AppPrimeNGModule,
    SharedModule
  ],
  declarations: [

  
    InatAtivUsuarioComponent
  ]
})
export class UsuarioModule { }
