import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNGModule } from './biblioteca-angular/primeNG.module';




@NgModule({
  declarations: [
    //ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    //ErrorDialogComponent
  ]
})
export class SharedModule { }
