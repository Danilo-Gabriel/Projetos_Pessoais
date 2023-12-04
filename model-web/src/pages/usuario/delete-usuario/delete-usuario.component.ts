import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemoverService } from './service/remover.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {

  private routeSub!: Subscription;
  private idUsuario!: string;
  route: any;

  constructor(
    private removerService : RemoverService

  ){

  }


  ngOnInit(): void {

   

  }



}
