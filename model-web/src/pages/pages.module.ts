import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimeNGModule } from 'src/shared/primeNG/primeNG.module';




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
