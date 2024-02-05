import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from 'src/shared/primeNG/primeNG.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrimeNGModule
  ],
  declarations: []
})
export class HomeModule { }
