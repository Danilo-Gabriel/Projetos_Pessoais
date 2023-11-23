import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppPrimeNGModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
