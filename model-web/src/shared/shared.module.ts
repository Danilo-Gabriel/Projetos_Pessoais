import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimeNGModule } from './app-primeNG/app-primeNG.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppPrimeNGModule
  ],
  exports:[

  ]
})
export class SharedModule { }
