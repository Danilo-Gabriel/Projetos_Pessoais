import { SharedModule } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RemoverService } from './service/remover.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {

  private routeSub!: Subscription;
  private idUsuario!: string;

  constructor(
    private service : RemoverService,
    private route: ActivatedRoute


  ){

  }


  ngOnInit(): void {

      this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario']

    });

  }



}
