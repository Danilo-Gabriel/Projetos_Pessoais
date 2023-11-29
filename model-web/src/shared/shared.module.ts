import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimeNGModule } from './app-primeNG/app-primeNG.module';




@NgModule({
  declarations: [
    //ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    AppPrimeNGModule
  ],
  exports:[
    //ErrorDialogComponent
  ]
})
export class SharedModule { }
