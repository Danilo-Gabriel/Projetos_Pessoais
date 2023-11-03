import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
 exports:[
  ButtonModule,
  MatToolbarModule,
  DividerModule,
  HttpClientModule,
  ReactiveFormsModule

 ]
})
export class AppPrimeNGModule { }
