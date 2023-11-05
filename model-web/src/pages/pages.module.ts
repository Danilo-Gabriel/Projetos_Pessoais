import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppPrimeNGModule,
    SharedModule
  ]
})
export class PagesModule { }
