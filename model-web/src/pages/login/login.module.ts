import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrimeNGModule } from 'src/shared/app-primeNG/app-primeNG.module';
import { SharedModule } from 'src/shared/shared.module';
import { AppModule } from 'src/app/app.module';




@NgModule({
  imports: [
    CommonModule,
    AppPrimeNGModule,
    SharedModule
  ],
  declarations: [

  ]
})
export class LoginModule { }
