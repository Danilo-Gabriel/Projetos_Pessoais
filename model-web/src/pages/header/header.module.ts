import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from 'src/shared/primeNG/primeNG.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNGModule
  ]
})
export class HeaderModule { }
