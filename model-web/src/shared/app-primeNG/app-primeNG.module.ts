import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';





@NgModule({
 exports:[
  ButtonModule,
  MatToolbarModule,
  DividerModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatMenuModule,



 ]
})
export class AppPrimeNGModule { }
