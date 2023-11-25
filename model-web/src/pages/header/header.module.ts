import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppPrimeNGModule
  ]
})
export class HeaderModule { }
