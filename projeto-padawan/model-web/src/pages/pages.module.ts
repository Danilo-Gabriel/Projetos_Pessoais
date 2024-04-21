import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/shared/biblioteca-angular/primeNG.module';





@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeNGModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class PagesModule { }
