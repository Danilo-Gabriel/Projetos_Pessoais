import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimeNGModule } from './app-primeNG/app-primeNG.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppToastComponent } from './components/app-toast/app-toast.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    AppToastComponent
  ],
  imports: [
    CommonModule,
    AppPrimeNGModule
  ],
  exports:[
    ErrorDialogComponent,
    AppToastComponent
  ]
})
export class SharedModule { }
