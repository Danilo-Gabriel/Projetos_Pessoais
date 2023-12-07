import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inat-usuario',
  templateUrl: './inat-usuario.component.html',
  styleUrls: ['./inat-usuario.component.scss']
})
export class InatUsuarioComponent implements OnInit {


  private routeSub!: Subscription;
  private idUsuario!: string;

  constructor(
    private route: ActivatedRoute
  ){

  }


  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario']

    })

  }


}
