import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { PrimeNGModule } from 'src/shared/biblioteca-angular/primeNG.module';






@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule,
    SharedModule
  ],
  declarations: [

  ]
})
export class UsuarioModule { }
